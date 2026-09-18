<script lang="ts">
  import { faker } from "@faker-js/faker";
  import { VGrid } from "../../../src/svelte";

  // fixed widths and content-fit (auto) widths can be mixed
  const columns = [
    { key: "id", width: 60 },
    { key: "username", width: 200 },
    { key: "email", width: "auto" },
    { key: "company", width: "auto" },
    { key: "domain", width: 200 },
  ] as const;
  const data = Array.from({ length: 1000 }).map((_, i) => ({
    id: i,
    username: faker.person.fullName(),
    email: faker.internet.email(),
    company: faker.company.name(),
    domain: faker.internet.domainName(),
  }));
  // the header row has no data
  const rows = [null, ...data];
</script>

<VGrid
  {rows}
  rowHeight={30}
  cols={columns}
  colWidth="width"
  headerRows={1}
  style="height: 100vh; box-sizing: border-box; border: solid 1px black; background: white;"
>
  {#snippet children(row, col)}
    <div
      style="padding: 4px; border-right: solid 1px black; border-bottom: solid 1px black; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"
      style:background={row === null ? "burlywood" : undefined}
    >
      {row === null ? col.key : row[col.key]}
    </div>
  {/snippet}
</VGrid>
