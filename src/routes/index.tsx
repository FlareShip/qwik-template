import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <>
      <div class="p-4 absolute top-4 left-4 rounded-md border-blue-500 bg-blue-100 text-blue-600">
        Hello The Developer, <span class="text-xs">I'm not a button!</span>{' '}
      </div>
    </>
  )
})

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
}
