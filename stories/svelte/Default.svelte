<script lang="ts">
  import { VList } from "../../src/svelte";

  const sizes = [20, 40, 180, 77];
  const createItem = (i: number) => ({ id: i, size: sizes[i % 4] + "px" });

  const data = Array.from({ length: 1000 }).map((_, i) => createItem(i));
</script>

<VList {data} let:item style={`height: 100vh;`} getKey={(d) => d.id}>
  <div
    style={`
      height: ${item.size};
      background: white;
      border-bottom: solid 1px #ccc;
    `}
  >
    {item.id}
  </div>
</VList>
