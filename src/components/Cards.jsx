import data from "../data/coffee-list.json";

export function Cards() {
  const coffeList = data;

  return (
    <div className="">
      {coffeList?.map((coffe) => (
        <div
          className="border-black border m-6 bg-gray-200 transform hover:scale-95 transition duration-200"
          key={coffe.name}
        >
          <img src="small.png" alt={coffe?.name} className="w-32 h-auto m-4" />
          <h1 className="font-bold text-xl">{coffe?.name}</h1>
          <span className="text-gray-700 block">{coffe.description.short}</span>
          <span className="font-bold text-blue-400 text-lg">
            {coffe.price.small} RSD
          </span>
        </div>
      ))}
    </div>
  );
}

/* <Stack h={300} bg="var(--mantine-color-body)">
      {coffeList.map((coffe) => {
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image src="../../public/large.png" height={160} alt={coffe.name} />
          </Card.Section>
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>{coffe.name}</Text>
          </Group>
          <Text size="sm" c="dimmed">
            {coffe.description}
          </Text>
        </Card>;
        console.log(coffe.name);
      })}
    </Stack> */

//     <div>
//     {coffeList?.map((coffe) => (
//       <div className="border-black" key={coffe.name}>
//         <img src="large.png" alt={coffe?.name} />
//         <span>{coffe?.name}</span>
//         <span>{coffe.description.short}</span>
//       </div>
//     ))}
//   </div>
