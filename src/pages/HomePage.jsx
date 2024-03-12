import { Cards } from "../components/Cards";
import Header from "../components/Header";
import { MantineProvider } from "@mantine/core";

export function HomePage() {
  return (
    <MantineProvider>
      <Header />
      <div>{<Cards />}</div>
    </MantineProvider>
  );
}
