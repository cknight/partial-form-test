import { JSX } from "preact/jsx-runtime";

export default function Counter(props: { name: string }) {
  function page(event: JSX.TargetedEvent<HTMLButtonElement, Event>) {
    event.preventDefault();
    const form = document.getElementById("pageForm") as HTMLFormElement;
    form.submit();
  }

  return (
    <div class="flex gap-8 py-6">
      {props.name && (
        <div class="my-8">
          Name Entered: <span>{props.name}</span>
        </div>
      )}
      <input
        type="text"
        id="nameInput"
        name="nameInput"
        form="pageForm"
        class="ml-2 p-2 my-2"
      />

      <button
        type="submit"
        onClick={page}
        f-partial="/list"
      >
        Submit name
      </button>
    </div>
  );
}
