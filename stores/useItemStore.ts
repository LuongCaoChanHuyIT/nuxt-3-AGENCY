import { defineStore } from "pinia";
import { ref } from "vue";

export const useHomepageStore = defineStore("homepage", () => {
  const { $supabase } = useNuxtApp();
  const items = ref<any[]>([]);
  const item = ref<any | null>(null);
  const error = ref<string | null>(null);
  const itemsSection = ref<any[]>([]);
  const ALLOWED_TABLES = ["homepage_sections", "homepage_items"];

  // fetch all record
  const fetchItems = async (table: string, onlyReturn = false) => {
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

  // fetch a record
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
  };
});
