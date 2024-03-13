import { CardsList } from "../components/CardsList";
import Header from "../components/Header";
import { MantineProvider } from "@mantine/core";

export function HomePage() {
  return (
    <MantineProvider>
      <Header />
      <CardsList />
    </MantineProvider>
  );
}
