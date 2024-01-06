import { HomeProvider } from "components";
import { CategoryList, ModalActionWrapper } from "components";

export function HomeWrapper() {
  return (
    <HomeProvider>
      <CategoryList />

      <ModalActionWrapper />
    </HomeProvider>
  );
}