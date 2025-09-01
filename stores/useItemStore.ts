import { defineStore } from "pinia";
import { ref } from "vue";

export const useHomepageStore = defineStore("homepage", () => {
  const { $supabase } = useNuxtApp();

  const items = ref<any[]>([]);
  const item = ref<any | null>(null);
  const error = ref<string | null>(null);
  const itemsSection = ref<any[]>([]);

  const hero = ref<any[]>([]);
  const services = ref<any[]>([]);
  const process = ref<any[]>([]);
  const chooseus = ref<any[]>([]);
  const team = ref<any[]>([]);
  const projects = ref<any[]>([]);
  const testimonials = ref<any[]>([]);
  const faq = ref<any[]>([]);

  const ALLOWED_TABLES = ["homepage_sections", "homepage_items"];

  const fechHomepageSection = async () => {
    try {
      const results = await Promise.allSettled([
        fetchItems("homepage_sections"),
        fetchItems("homepage_items"),
      ]);

      const sections =
        results[0].status === "fulfilled" ? (results[0].value as any[]) : [];
      const items =
        results[1].status === "fulfilled" ? (results[1].value as any[]) : [];

      const sectionMap = sections.reduce((acc, section) => {
        acc[section.id] = { ...section, items: [] };
        return acc;
      }, {} as Record<number, any>);

      items.forEach((item) => {
        if (sectionMap[item.section_id]) {
          sectionMap[item.section_id].items.push(item);
        }
      });

      // all data homepage
      const linkedSections = Object.values(sectionMap);

      hero.value = sectionMap[3] || [];
      services.value = sectionMap[5] || [];
      process.value = sectionMap[6] || [];
      chooseus.value = sectionMap[7] || [];
      team.value = sectionMap[8] || [];
      projects.value = sectionMap[9] || [];
      testimonials.value = sectionMap[10] || [];
      faq.value = sectionMap[11] || [];

      console.log(linkedSections, "=========================");

      console.log(sectionMap[5], "fffffffffffff");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchItems = async (table: string, onlyReturn = true) => {
    if (!ALLOWED_TABLES.includes(table)) {
      throw new Error(`Table '${table}' is not allowed.`);
    }
    error.value = null;
    const { data, error: err } = await $supabase
      .from(table)
      .select("*")
      .order("id", { ascending: true });

    if (err) {
      error.value = err.message;
      return;
    }

    if (onlyReturn) {
      return data;
    }

    items.value = data || [];
  };

  const fetchItemsSection = async (
    table: string,
    id: number,
    onlyReturn = true
  ) => {
    if (!ALLOWED_TABLES.includes(table)) {
      throw new Error(`Table '${table}' is not allowed.`);
    }
    error.value = null;
    const { data, error: err } = await $supabase
      .from(table)
      .select("*")
      .eq("section_id", id);
    //   .single();
    if (err) {
      error.value = err.message;
      return;
    }

    if (onlyReturn) {
      return data;
    }

    // itemsSection.value = data || [];
  };

  const fetchItem = async (table: string, id: number, onlyReturn = true) => {
    if (!ALLOWED_TABLES.includes(table)) {
      throw new Error(`Table '${table}' is not allowed.`);
    }
    error.value = null;
    const { data, error: err } = await $supabase
      .from(table)
      .select("*")
      .eq("id", id)
      .single();

    if (err) {
      error.value = err.message;
      return;
    }

    if (onlyReturn) {
      return data;
    }

    item.value = data;
  };

  return {
    items,
    item,
    itemsSection,
    error,
    fetchItems,
    fetchItem,
    fetchItemsSection,
    fechHomepageSection,
    hero,
    services,
    process,
    chooseus,
    team,
    projects,
    testimonials,
    faq,
  };
});
