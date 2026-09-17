<script setup lang="ts">
import { faker } from "@faker-js/faker";
import { VGrid } from "../../../src/vue";

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

<template>
  <VGrid
    :rows="rows"
    :rowHeight="30"
    :cols="columns"
    colWidth="width"
    :pinnedRows="1"
    :style="{
      height: '100vh',
      boxSizing: 'border-box',
      border: 'solid 1px black',
    }"
    #default="{ row, col }"
  >
    <div
      :style="{
        background: row === null ? 'burlywood' : 'white',
        padding: '4px',
        borderRight: 'solid 1px black',
        borderBottom: 'solid 1px black',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }"
    >
      {{ row === null ? col.key : row[col.key] }}
    </div>
  </VGrid>
</template>
