// composables/useHeader.ts
import { useHeaderStore, type HeaderConfig } from "~/stores/header";

export function useHeader(config: HeaderConfig) {
  const header = useHeaderStore();

  onMounted(() => header.setHeader(config));
  onBeforeUnmount(() => header.resetHeader());
}
