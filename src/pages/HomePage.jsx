import { CardsList } from "../components/CardsList";
import { MantineProvider } from "@mantine/core";

export function HomePage() {
  return (
    <MantineProvider>
      <CardsList />
    </MantineProvider>
  );
}
