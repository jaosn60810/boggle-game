export async function getWordsFromGSheet() {
  try {
    const res = await fetch(
      'https://docs.google.com/spreadsheets/d/1cjOAtSYV514lxz6MDdkoXjroWmemJUmTYWwk2WDpoks/gviz/tq?tqx=out:json&gid=0'
    );
    let data = await res.text();
    data = JSON.parse(data.slice(47, -2)).table.rows.map((item) => item.c[0].v);
    return data;
  } catch (error) {
    console.error(error);
  }
}
