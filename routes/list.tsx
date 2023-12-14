import { Handlers, PageProps } from "$fresh/server.ts";
import NameIsland from "../islands/NameIsland.tsx";
import { Partial } from "$fresh/runtime.ts";

interface Props {
  nameInput: string;
}

export const handler: Handlers = {
  async POST(req, ctx) {
    const form = await req.formData();
    const nameInput = form.get("nameInput")?.toString() || "";
    return await ctx.render({ nameInput });
  },
};

export default function Home(props: PageProps<Props>) {
  const nameResult = (props.data && props.data.nameInput) || "";

  return (

    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <form
          id="pageForm"
          action="/list"
          method="POST"
          f-partial="/list"
          class="m-8 mt-0 "
        >
          <Partial name="list">
            <NameIsland name={nameResult} />
          </Partial>
        </form>
      </div>
    </div>
  );
}
