export const defaultValue = {
  type: "doc",
  content: [
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Welcome to our React Block Editor Template built on top of ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tiptap.dev/",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "link",
              },
            },
          ],
          text: "Tiptap",
        },
        {
          type: "text",
          text: ", ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://nextjs.org/",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "link",
              },
            },
          ],
          text: "Next.js",
        },
        {
          type: "text",
          text: " and ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "link",
              },
            },
          ],
          text: "Tailwind",
        },
        {
          type: "text",
          text: ". This project can be a good starting point for your own implementation of a block editor.",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: null,
      },
      content: [
        {
          type: "text",
          text: "import { useEditor, EditorContent } from '@tiptap/react'\n\nfunction App() {\n  const editor = useEditor()\n\n  return <EditorContent editor={editor} />\n}",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "This editor includes features like:",
        },
      ],
    },
    {
      type: "bulletList",
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "A DragHandle including a DragHandle menu",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "A Slash menu that can be triggered via typing a ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "/",
                },
                {
                  type: "text",
                  text: " into an empty paragraph or by using the ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "+ Button",
                },
                {
                  type: "text",
                  text: " next to the drag handle",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "A TextFormatting menu that allows you to change the font size, ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "font weight",
                },
                {
                  type: "text",
                  text: ", font family, color, highlight and more",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "A Table of Contents that can be viewed via clicking on the button on the top left corner",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "Live collaboration including content synchronization and collaborative cursors",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "AI implementation with text and image generation and auto completion via the ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "TAB",
                },
                {
                  type: "text",
                  text: " key.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          text: "Get started",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "To access our block editor template, simply head over to your ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://cloud.tiptap.dev/react-templates",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "link",
              },
            },
          ],
          text: "Tiptap Account",
        },
        {
          type: "text",
          text: " If you are not already a member, sign up for an account and complete the 2-minute React Template survey. Once finished, we will send you an invite to the private GitHub repository.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          text: "Installed extensions",
        },
      ],
    },
    {
      type: "bulletList",
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap-pro/extension-ai",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap-pro/extension-details",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap-pro/extension-details-content",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap-pro/extension-details-summary",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap-pro/extension-drag-handle",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap-pro/extension-drag-handle-react",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap-pro/extension-emoji",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap-pro/extension-file-handler",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap-pro/extension-mathematics",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap-pro/extension-node-range",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap-pro/extension-table-of-contents",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap-pro/extension-unique-id",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap/extension-bullet-list",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap/extension-character-count",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap/extension-code-block",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap/extension-code-block-lowlight",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap/extension-collaboration",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap/extension-collaboration-cursor",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap/extension-color",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap/extension-document",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap/extension-dropcursor",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap/extension-focus",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap/extension-font-family",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap/extension-heading",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap/extension-highlight",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap/extension-horizontal-rule",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap/extension-image",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap/extension-link",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap/extension-ordered-list",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap/extension-paragraph",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap/extension-placeholder",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap/extension-subscript",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap/extension-superscript",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap/extension-table",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap/extension-table-header",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap/extension-table-row",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap/extension-task-item",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap/extension-task-list",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap/extension-text-align",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap/extension-text-style",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap/extension-typography",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "@tiptap/extension-underline",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const blog1 = {
  type: "doc",
  content: [
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Friday, June 21, 2024",
        },
      ],
    },
    {
      type: "bulletList",
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Adam Wathan",
                },
              ],
            },
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://twitter.com/adamwathan",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-sky-500 hover:text-sky-600 dark:text-sky-400",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "@adamwathan",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "image",
      attrs: {
        src: "https://tailwindcss.com/_next/static/media/card.647cc6f3.jpg",
        alt: "Headless UI v2.1",
        title: null,
        width: null,
        height: null,
      },
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/2024-06-21-headless-ui-v2-1#simplified-transition-api",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "​Simplified transition API",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We’ve made transitions way easier in v2.1 by adding a new ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "transition",
        },
        {
          type: "text",
          text: " prop to all of the built-in components you might want to transition, and adding data attributes for each transition stage so you can add transition styles by just throwing some classes on the target element:",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "jsx",
      },
      content: [
        {
          type: "text",
          text: "import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'\n\nfunction Example() {\n  return (\n    <Menu>\n      <MenuButton>My account</MenuButton>\n      <MenuItems\n        transition\n        className={`\n          transition ease-out\n          data-[closed]:scale-95 data-[closed]:opacity-0\n          data-[enter]:duration-200 data-[leave]:duration-300\n        `}\n      >\n        {/* Menu items…  */}\n      </MenuItems>\n    </Menu>\n  )\n}\n",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "There are four data attributes you can use to target the different stages of your transitions:",
        },
      ],
    },
    {
      type: "bulletList",
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "data-closed",
                },
                {
                  type: "text",
                  text: ": The styles the element should transition from when entering and to when leaving.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "data-enter",
                },
                {
                  type: "text",
                  text: ": Styles to apply while the element is entering, like a duration or easing curve.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "data-leave",
                },
                {
                  type: "text",
                  text: ": Styles to apply while the element is leaving, like a duration or easing curve.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "data-transition",
                },
                {
                  type: "text",
                  text: ": Styles to apply while the element is entering or leaving, useful for sharing values between both stages.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "You can even stack these attributes to use different ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "closed",
        },
        {
          type: "text",
          text: " styles for entering and leaving. For example this dialog slides in from the left, but slides out to the right:",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "jsx",
      },
      content: [
        {
          type: "text",
          text: "import { Dialog } from '@headlessui/react'\nimport { useState } from 'react'\n\nfunction Example() {\n  let [isOpen, setIsOpen] = useState(false)\n\n  return (\n    <>\n      <button onClick={() => setIsOpen(true)}>Open dialog</button>\n      <Dialog\n        open={isOpen}\n        onClose={() => setIsOpen(false)}\n        transition\n        className={`\n          transition ease-out duration-300\n          data-[closed]:opacity-0\n          data-[closed]:data-[enter]:-translate-x-8\n          data-[closed]:data-[leave]:translate-x-8\n        `}\n      >\n        {/* Dialog content… */}\n      </Dialog>\n    </>\n  )\n}\n",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "And for transitioning regular HTML elements or other components, you can still use the ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "<Transition>",
        },
        {
          type: "text",
          text: " component but with the new data attribute APIs:",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "jsx",
      },
      content: [
        {
          type: "text",
          text: "import { Transition } from '@headlessui/react'\nimport { useState } from 'react'\n\nfunction Example() {\n  const [isShowing, setIsShowing] = useState(false)\n\n  return (\n    <>\n      <button onClick={() => setIsShowing((isShowing) => !isShowing)}>Toggle</button>\n      <Transition show={isShowing}>\n        <div className=\"transition duration-300 data-[closed]:opacity-0\">\n          I will fade in and out\n        </div>\n      </Transition>\n    </>\n  )\n}\n",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We’ve already updated all of Tailwind UI to use this new transition API and the code is a lot simpler and lighter. Take a look at the ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindui.com/components/application-ui/overlays/modal-dialogs",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Modal Dialog",
        },
        {
          type: "text",
          text: ", ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindui.com/components/application-ui/elements/dropdowns",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Dropdown",
        },
        {
          type: "text",
          text: ", ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindui.com/components/application-ui/overlays/slide-overs",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Slide-over",
        },
        {
          type: "text",
          text: ", ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindui.com/components/marketing/elements/flyout-menus",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Flyout Menu",
        },
        {
          type: "text",
          text: ", or ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindui.com/components/application-ui/forms/select-menus",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Select Menu",
        },
        {
          type: "text",
          text: " components for more examples.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "All of the existing APIs continue to work for backwards compatibility, but this new approach is what we’re going to recommend going forward.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Check out the updated ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "Transition",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://headlessui.com/react/transition",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: " component documentation",
        },
        {
          type: "text",
          text: " to learn more.",
        },
      ],
    },
    {
      type: "horizontalRule",
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/2024-06-21-headless-ui-v2-1#rendering-multiple-dialogs-as-siblings",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "​Rendering multiple dialogs as siblings",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "In Headless UI v2.1 you can finally render multiple dialogs at the same time without nesting one inside the other.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "This can be really helpful when two unrelated parts of your application need to show a dialog at the same time — for example maybe you already have some sort of confirmation dialog open but another part of your app detects that you’ve lost network connectivity or your session has timed-out and needs to throw up a new dialog on top.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Here’s what something like that might look like with ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindui.com/templates/catalyst",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Catalyst",
        },
        {
          type: "text",
          text: ", the application UI kit we’ve been working on recently:",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We keep track of the order in which each dialog is opened, and whichever one was opened last is the one that will close when you press escape or click outside the dialog.",
        },
      ],
    },
    {
      type: "horizontalRule",
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "To start using this stuff today, just install the latest version of Headless UI:",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "sh",
      },
      content: [
        {
          type: "text",
          text: "$ npm i @headlessui/react@latest",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "If you run into any issues, let us know on ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://github.com/tailwindlabs/headlessui",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "GitHub",
        },
        {
          type: "text",
          text: "!",
        },
      ],
    },
  ],
};

export const blog2 = {
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: {
        level: 1,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "Automatically clean up whitespace and duplicate class names",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Friday, May 31, 2024",
        },
      ],
    },
    {
      type: "bulletList",
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Adam Wathan",
                },
              ],
            },
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://twitter.com/adamwathan",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-sky-500 hover:text-sky-600 dark:text-sky-400",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "@adamwathan",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "image",
      attrs: {
        src: "https://tailwindcss.com/_next/static/media/card.2d498a85.jpg",
        alt: "Catalyst application layout preview",
        title: null,
        width: null,
        height: null,
      },
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We just released a new version of ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "prettier-plugin-tailwindcss",
        },
        {
          type: "text",
          text: " which adds support for removing unnecessary whitespace and duplicate classes when sorting.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/2024-05-30-prettier-plugin-collapse-whitespace#cleaning-up-unnecessary-whitespace",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Cleaning up unnecessary whitespace",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "When you’re copying around class names or deleting a class name from the middle of a list, it’s easy to end up with some extra whitespace that needs to be cleaned up.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Now our Prettier plugin will handle this for you automatically, so you don’t need to clean it up yourself.",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "jsx",
      },
      content: [
        {
          type: "text",
          text: 'function MyComponent({ children }) {\n  return (\n    <div className=" mx-auto  max-w-7xl px-6 lg:px-8 ">\n      {children}\n    </div>\n  )\n}',
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/2024-05-30-prettier-plugin-collapse-whitespace#removing-duplicate-classes",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Removing duplicate classes",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Our ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/docs/editor-setup#intelli-sense-for-vs-code",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "VS Code extension",
        },
        {
          type: "text",
          text: " has warned you about duplicate class names for a long time, but now our Prettier plugin can remove those duplicate classes for you automatically.",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "jsx",
      },
      content: [
        {
          type: "text",
          text: 'function MyComponent({ children }) {\n  return (\n    <div className="flex bg-zinc-100 px-4">\n      {children}\n    </div>\n  )\n}',
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "To start playing with these improvements in your own projects, just install the latest version:",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "sh",
      },
      content: [
        {
          type: "text",
          text: "$ npm i prettier-plugin-tailwindcss@latest",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "If you run into any issues, let us know on ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://github.com/tailwindlabs/prettier-plugin-tailwindcss/",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "GitHub",
        },
        {
          type: "text",
          text: "!",
        },
      ],
    },
  ],
};

export const blog3 = {
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: {
        level: 1,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "Catalyst: Application layouts, navigation menus, description lists, and more",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Date",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Saturday, May 25, 2024",
        },
      ],
    },
    {
      type: "bulletList",
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Adam Wathan",
                },
              ],
            },
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://twitter.com/adamwathan",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-sky-500 hover:text-sky-600 dark:text-sky-400",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "@adamwathan",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "image",
      attrs: {
        src: "https://tailwindcss.com/_next/static/media/catalyst-header.5da8820a.jpg",
        alt: "Catalyst application layout preview",
        title: null,
        width: null,
        height: null,
      },
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We just published the first major update to ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindui.com/templates/catalyst",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Catalyst",
        },
        {
          type: "text",
          text: " since releasing the development preview, with two new application layouts, navbar and sidebar components, description lists, and more.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We’re also pumped to share that with the release of ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/headless-ui-v2",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Headless UI v2.0 for React",
        },
        {
          type: "text",
          text: ", Catalyst is no longer in development preview — ",
        },
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "it’s officially stable",
        },
        {
          type: "text",
          text: " and you can start using it in production today without worrying about breaking changes in the underlying dependencies.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Check out our brand new ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://catalyst-demo.tailwindui.com/",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "live demo site",
        },
        {
          type: "text",
          text: " to see what a full Catalyst project looks and feels like after these updates for yourself.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/2024-05-24-catalyst-application-layouts#new-application-layout-components",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "New application layout components",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "One of the hardest things about trying to get started on a new project idea is getting past the blank canvas so you can actually start building something.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "In this update we’ve added two new application layout components to make it easy to give your project a shape and structure so you have something you can start building with.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "The first layout is a classic ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://catalyst.tailwindui.com/docs/sidebar-layout",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "sidebar layout",
        },
        {
          type: "text",
          text: ", that moves the sidebar into a collapsible mobile menu on smaller screens:",
        },
      ],
    },
    {
      type: "image",
      attrs: {
        src: "https://tailwindcss.com/_next/static/media/sidebar-layout.e72f12e0.jpg",
        alt: "Sidebar layout example",
        title: null,
        width: null,
        height: null,
      },
    },
    {
      type: "codeBlock",
      attrs: {
        language: "jsx",
      },
      content: [
        {
          type: "text",
          text: "import { SidebarLayout } from '@/components/sidebar-layout'\nimport { Navbar } from '@/components/navbar'\nimport { Sidebar } from '@/components/sidebar'\n\nfunction Example({ children }) {\n  return (\n    <SidebarLayout\n      sidebar={<Sidebar>{/* Sidebar menu */}</Sidebar>}\n      navbar={<Navbar>{/* Navbar for mobile screens */}</Navbar>}\n    >\n      {/* Your page content */}\n    </SidebarLayout>\n  )\n}",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "The second is a simpler ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://catalyst.tailwindui.com/docs/stacked-layout",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "stacked layout",
        },
        {
          type: "text",
          text: " with a horizontal navigation menu, which is often a great fit for apps with fewer pages:",
        },
      ],
    },
    {
      type: "image",
      attrs: {
        src: "https://tailwindcss.com/_next/static/media/stacked-layout.ec57a472.jpg",
        alt: "Stacked layout example",
        title: null,
        width: null,
        height: null,
      },
    },
    {
      type: "codeBlock",
      attrs: {
        language: "jsx",
      },
      content: [
        {
          type: "text",
          text: "import { StackedLayout } from '@/components/stacked-layout'\nimport { Navbar } from '@/components/navbar'\nimport { Sidebar } from '@/components/sidebar'\n\nfunction Example({ children }) {\n  return (\n    <StackedLayout\n      navbar={<Navbar>{/* Top navigation menu */}</Navbar>}\n      sidebar={<Sidebar>{/* Sidebar content for mobile menu */}</Sidebar>}\n    >\n      {/* Your page content */}\n    </StackedLayout>\n  )\n}",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "And they both support dark mode too, of course:",
        },
      ],
    },
    {
      type: "image",
      attrs: {
        src: "https://tailwindcss.com/_next/static/media/layout-dark-mode.29f2de5c.jpg",
        alt: "Sidebar layout in dark mode",
        title: null,
        width: null,
        height: null,
      },
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We worked really hard to get the APIs for all of these components right, making it easy to position things where you need them to be, optionally include icons, incorporate dropdown menus, and more.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "The final result turned out feeling really simple which is exactly what we were going for, and I think you’ll find they are a real delight to build with.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Check out the ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://catalyst.tailwindui.com/docs/sidebar-layout",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Sidebar layout documentation",
        },
        {
          type: "text",
          text: " and ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://catalyst.tailwindui.com/docs/stacked-layout",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Stacked layout documentation",
        },
        {
          type: "text",
          text: " to get started, then dig into the ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://catalyst.tailwindui.com/docs/navbar",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Navbar",
        },
        {
          type: "text",
          text: " and ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://catalyst.tailwindui.com/docs/sidebar",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Sidebar",
        },
        {
          type: "text",
          text: " components to learn how to structure all of the navigation items.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/2024-05-24-catalyst-application-layouts#description-lists",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Description lists",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "When we were working on the application layouts we realized we didn’t have any great content to demo them with, so we cooked up a ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "DescriptionList",
        },
        {
          type: "text",
          text: " component to fill in that big empty space.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Customer",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Michael Foster",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Event",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Bear Hug: Live in Concert",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Amount",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "$150.00 USD",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Amount after exchange rate",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "US$150.00 → CA$199.79",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Fee",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "$4.79 USD",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Net",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "$1,955.00",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "jsx",
      },
      content: [
        {
          type: "text",
          text: "import { DescriptionDetails, DescriptionList, DescriptionTerm } from '@/components/description-list'\n\nfunction Example() {\n  return (\n    <DescriptionList>\n      <DescriptionTerm>Customer</DescriptionTerm>\n      <DescriptionDetails>Michael Foster</DescriptionDetails>\n\n      <DescriptionTerm>Event</DescriptionTerm>\n      <DescriptionDetails>Bear Hug: Live in Concert</DescriptionDetails>\n\n       {/* ... */}\n    </DescriptionList>\n  )\n}",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "It’s a really simple API that works just like the HTML ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "<dl>",
        },
        {
          type: "text",
          text: " element, but is nicely styled, responsive, and with dark mode support of course.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Check out the ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://catalyst.tailwindui.com/docs/description-list",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Description list",
        },
        {
          type: "text",
          text: " documentation for more details.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/2024-05-24-catalyst-application-layouts#page-headings",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Page headings",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "More components we needed to make the demo look good! We’ve added ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "Heading",
        },
        {
          type: "text",
          text: " and ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "Subheading",
        },
        {
          type: "text",
          text: " components you can use to quickly and consistently title things in your UI.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 1,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "Heading",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "Subheading",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "jsx",
      },
      content: [
        {
          type: "text",
          text: "import { Heading, Subheading } from '@/components/heading'\n\nfunction Example() {\n  return (\n    <div>\n      <Heading>Heading</Heading>\n      <Subheading>Subheading</Subheading>\n    </div>\n  )\n}",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "You can control which HTML heading element is rendered using the ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "level",
        },
        {
          type: "text",
          text: " prop, and like everything else, they’re responsive with built-in dark mode support.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "See the ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://catalyst.tailwindui.com/docs/heading",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Heading",
        },
        {
          type: "text",
          text: " documentation for more examples.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/2024-05-24-catalyst-application-layouts#dividers",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Dividers",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Saved the best for last — Catalyst now includes a gray line you can put in between things.",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "jsx",
      },
      content: [
        {
          type: "text",
          text: "import { Divider } from '@/components/divider'\n\nfunction Example() {\n  return <Divider />\n}",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We worked tirelessly on this one, and are so proud to make this part of your application development process easier.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Check out the ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://catalyst.tailwindui.com/docs/divider",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Divider",
        },
        {
          type: "text",
          text: " documentation — it does have one prop at least.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Catalyst is included with your Tailwind UI all-access license at no additional cost, so if you’ve got a license, log in and ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindui.com/templates/catalyst",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "download the latest version",
        },
        {
          type: "text",
          text: " to start building.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Looking forward to seeing what you do with it!",
        },
      ],
    },
  ],
};

export const blog4 = {
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: {
        level: 1,
      },
      content: [
        {
          type: "text",
          text: "Tuesday, May 7, 2024",
        },
      ],
    },
    {
      type: "bulletList",
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Adam Wathan",
                },
              ],
            },
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://twitter.com/adamwathan",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-sky-500 hover:text-sky-600 dark:text-sky-400",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "@adamwathan",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Jonathan Reinink",
                },
              ],
            },
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://twitter.com/reinink",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-sky-500 hover:text-sky-600 dark:text-sky-400",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "@reinink",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "image",
      attrs: {
        src: "https://tailwindcss.com/_next/static/media/card.a8310012.jpg",
        alt: "Headless UI v2.0",
        title: null,
        width: null,
        height: null,
      },
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Nothing beats actually building something real with your own tools when it comes to finding ways to make things better.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "As we’ve been working on ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/introducing-catalyst",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Catalyst",
        },
        {
          type: "text",
          text: " these last several months, we’ve been making dozens of improvements to Headless UI that let you write even less code, and make the developer experience even better.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We just released Headless UI v2.0 for React, which is the culmination of all this work.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Here’s all the best new stuff:",
        },
      ],
    },
    {
      type: "bulletList",
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://tailwindcss.com/blog/headless-ui-v2#built-in-anchor-positioning",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "Built-in anchor positioning",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://tailwindcss.com/blog/headless-ui-v2#new-checkbox-component",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "New checkbox component",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://tailwindcss.com/blog/headless-ui-v2#html-form-components",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "HTML form components",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://tailwindcss.com/blog/headless-ui-v2#improved-hover-focus-and-active-state-detection",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "Improved hover, focus and active state detection",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://tailwindcss.com/blog/headless-ui-v2#combobox-list-virtualization",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "Combobox list virtualization",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://tailwindcss.com/blog/headless-ui-v2#new-website-and-improved-docs",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "New website and improved docs",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Add it to your project by installing the latest version of ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "@headlessui/react",
        },
        {
          type: "text",
          text: " from npm:",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "sh",
      },
      content: [
        {
          type: "text",
          text: "npm install @headlessui/react@latest",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "If you’re upgrading from v1.x, check out the ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://github.com/tailwindlabs/headlessui/releases/tag/%40headlessui%2Freact%40v2.0.0#user-content-upgrading-from-v1",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "upgrade guide",
        },
        {
          type: "text",
          text: " to learn more about what’s changed.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/headless-ui-v2#built-in-anchor-positioning",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Built-in anchor positioning",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We’ve integrated ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://floating-ui.com/",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Floating UI",
        },
        {
          type: "text",
          text: " directly into Headless UI, so you never have to worry about dropdowns going out of view or being obscured by other elements on the screen.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Use the new ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "anchor",
        },
        {
          type: "text",
          text: " prop on the ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "Menu",
        },
        {
          type: "text",
          text: ", ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "Popover",
        },
        {
          type: "text",
          text: ", ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "Combobox",
        },
        {
          type: "text",
          text: ", and ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "Listbox",
        },
        {
          type: "text",
          text: " components to specify the anchor positioning, then fine-tune the placement with CSS variables like ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "--anchor-gap",
        },
        {
          type: "text",
          text: " and ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "--anchor-padding",
        },
        {
          type: "text",
          text: ":",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "Scroll up and down to see the dropdown position change",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "jsx",
      },
      content: [
        {
          type: "text",
          text: 'import { Menu, MenuButton, MenuItem, MenuItems } from \'@headlessui/react\'\n\nfunction Example() {\n  return (\n      <Menu>\n        <MenuButton>Options</MenuButton>\n        <MenuItems\n          anchor="bottom start"\n          className="[--anchor-gap:8px] [--anchor-padding:8px]"\n        >\n          <MenuItem>\n            <button>Edit</button>\n          </MenuItem>\n          <MenuItem>\n            <button>Duplicate</button>\n          </MenuItem>\n          <hr />\n          <MenuItem>\n            <button>Archive</button>\n          </MenuItem>\n          <MenuItem>\n            <button>Delete</button>\n          </MenuItem>\n        </MenuItems>\n      </Menu>\n  )\n}\n',
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "What makes this API really nice is that you can tweak the styles at different breakpoints by changing the CSS variables using utility classes like ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "sm:[--anchor-gap:4px]",
        },
        {
          type: "text",
          text: ".",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Check out the ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://headlessui.com/react/menu#positioning-the-dropdown",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "anchor positioning documentation",
        },
        {
          type: "text",
          text: " for each component for all of the details.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/headless-ui-v2#new-checkbox-component",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "New checkbox component",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We’ve added a new headless ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "Checkbox",
        },
        {
          type: "text",
          text: " component to complement our existing ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "RadioGroup",
        },
        {
          type: "text",
          text: " component, making it easy to build totally custom checkbox controls:",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "Enable beta features",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "This will give you early access to any awesome new features we're developing.",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "jsx",
      },
      content: [
        {
          type: "text",
          text: "import { Checkbox, Description, Field, Label } from '@headlessui/react'\nimport { CheckmarkIcon } from './icons/checkmark'\nimport clsx from 'clsx'\n\nfunction Example() {\n  return (\n    <Field>\n      <Checkbox\n        defaultChecked\n        className={clsx(\n          'size-4 rounded border bg-white dark:bg-white/5',\n          'data-[checked]:border-transparent data-[checked]:bg-blue-500',\n          'focus:outline-none data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500',\n        )}\n      >\n        <CheckmarkIcon className=\"stroke-white opacity-0 group-data-[checked]:opacity-100\" />\n      </Checkbox>\n      <div>\n        <Label>Enable beta features</Label>\n        <Description>\n          This will give you early access to any awesome new features we're developing.\n        </Description>\n      </div>\n    </Field>\n  )\n}\n",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Checkboxes can be controlled or uncontrolled, and can automatically sync their state with a hidden input to play nicely with HTML forms.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Take a look at the ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://headlessui.com/react/checkbox",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Checkbox documentation",
        },
        {
          type: "text",
          text: " to learn more.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/headless-ui-v2#html-form-components",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "HTML form components",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We’ve added a whole new set of components that just wrap native form controls, but do all of the tedious work of wiring up IDs and ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "aria-*",
        },
        {
          type: "text",
          text: " attributes for you automatically.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Here’s what it looked like to build a simple ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "<input>",
        },
        {
          type: "text",
          text: " field with a properly associated ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "<label>",
        },
        {
          type: "text",
          text: " and description before:",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "jsx",
      },
      content: [
        {
          type: "text",
          text: '<div>\n  <label id="name-label" for="name-input">Name</label>\n  <input\n    id="name-input"\n    aria-labelledby="name-label"\n    aria-describedby="name-description"\n  />\n  <p id="name-description">Use your real name so people will recognize you.</p>\n</div>',
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "And here’s what it looks like with these new components in Headless UI v2.0:",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "jsx",
      },
      content: [
        {
          type: "text",
          text: "import { Description, Field, Input, Label } from '@headlessui/react'\n\nfunction Example() {\n  return (\n    <Field>\n      <Label>Name</Label>\n      <Input name=\"your_name\" />\n      <Description>Use your real name so people will recognize you.</Description>\n    </Field>\n  )\n}",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "The new ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "Field",
        },
        {
          type: "text",
          text: " and ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "Fieldset",
        },
        {
          type: "text",
          text: " components also cascade disabled states like the native ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "<fieldset>",
        },
        {
          type: "text",
          text: " element, so you can easily disable an entire group of controls at once:",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "Select a country to see the region field become enabled",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "Shipping details",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "Street address",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "Country",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We currently only ship to North America.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "CanadaMexicoUnited States",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "Region",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "Submit",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "jsx",
      },
      content: [
        {
          type: "text",
          text: 'import { Button, Description, Field, Fieldset, Input, Label, Legend, Select } from \'@headlessui/react\'\nimport { regions } from \'./countries\'\n\nexport function Example() {\n  const [country, setCountry] = useState(null)\n\n  return (\n    <form action="/shipping">\n      <Fieldset>\n        <Legend>Shipping details</Legend>\n        <Field>\n          <Label>Street address</Label>\n          <Input name="address" />\n        </Field>\n        <Field>\n          <Label>Country</Label>\n          <Description>We currently only ship to North America.</Description>\n          <Select\n            name="country"\n            value={country}\n            onChange={(event) => setCountry(event.target.value)}\n          >\n            <option></option>\n            <option>Canada</option>\n            <option>Mexico</option>\n            <option>United States</option>\n          </Select>\n        </Field>\n        <Field disabled={!country}>\n          <Label className="data-[disabled]:opacity-40">State/province</Label>\n          <Select name="region" className="data-[disabled]:opacity-50">\n            <option></option>\n            {country && regions[country].map((region) => <option>{region}</option>)}\n          </Select>\n        </Field>\n        <Button>Submit</Button>\n      </Fieldset>\n    </form>\n  )\n}\n',
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We expose the disabled state using a ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "data-disabled",
        },
        {
          type: "text",
          text: " attribute in the rendered HTML. This lets us expose it even on elements that don’t support the native ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "disabled",
        },
        {
          type: "text",
          text: " attribute like the associated ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "<label>",
        },
        {
          type: "text",
          text: " element, making it really easy to fine-tune the disabled styles for each element.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "All in all we’ve added 8 new components here — ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "Fieldset",
        },
        {
          type: "text",
          text: ", ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "Legend",
        },
        {
          type: "text",
          text: ", ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "Field",
        },
        {
          type: "text",
          text: ", ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "Label",
        },
        {
          type: "text",
          text: ", ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "Description",
        },
        {
          type: "text",
          text: ", ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "Input",
        },
        {
          type: "text",
          text: ", ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "Select",
        },
        {
          type: "text",
          text: ", and ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "Textarea",
        },
        {
          type: "text",
          text: ".",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "For more details, start with the ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://headlessui.com/react/fieldset",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Fieldset documentation",
        },
        {
          type: "text",
          text: " and work your way through the rest.",
        },
      ],
    },
    {
      type: "horizontalRule",
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/headless-ui-v2#improved-hover-focus-and-active-state-detection",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Improved hover, focus and active state detection",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Using hooks from the awesome ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://react-spectrum.adobe.com/react-aria/hooks.html",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "React Aria",
        },
        {
          type: "text",
          text: " library under the hood, Headless UI now adds smarter ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "data-*",
        },
        {
          type: "text",
          text: " state attributes to your controls that behave more consistently across different devices than the native CSS pseudo-classes:",
        },
      ],
    },
    {
      type: "bulletList",
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "data-active",
                },
                {
                  type: "text",
                  text: " — like ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: ":active",
                },
                {
                  type: "text",
                  text: ", but is removed when dragging off of the element.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "data-hover",
                },
                {
                  type: "text",
                  text: " — like ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: ":hover",
                },
                {
                  type: "text",
                  text: ", but is ignored on touch devices to avoid sticky hover states.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "data-focus",
                },
                {
                  type: "text",
                  text: " — like ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: ":focus-visible",
                },
                {
                  type: "text",
                  text: ", without false positives from imperative focusing.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "Click, hover, focus, and drag the button to see the data attributes applied",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "Submit",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "html",
      },
      content: [
        {
          type: "text",
          text: '<!-- Rendered `Button` -->\n<button class="bg-indigo-600 data-[active]:bg-indigo-700 data-[hover]:bg-indigo-500 data-[focus]:outline ...">\n  Submit\n</button>',
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "To learn more about why applying these styles using JavaScript is important, I highly recommend reading through Devon Govett’s excellent blog series on this topic:",
        },
      ],
    },
    {
      type: "bulletList",
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://react-spectrum.adobe.com/blog/building-a-button-part-1.html",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "Building a Button Part 1: Press Events",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://react-spectrum.adobe.com/blog/building-a-button-part-2.html",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "Building a Button Part 2: Hover Interactions",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://react-spectrum.adobe.com/blog/building-a-button-part-3.html",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "Building a Button Part 3: Keyboard Focus Behavior",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "The web never ceases to surprise me with the amount of effort it takes to actually make nice things.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/headless-ui-v2#combobox-list-virtualization",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Combobox list virtualization",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We’ve integrated ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tanstack.com/virtual/latest",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "TanStack Virtual",
        },
        {
          type: "text",
          text: " into Headless UI to support list virtualization when you need to put a hundred thousand items in your combobox because, hey, that’s what the boss told you to do.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Use the new ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "virtual",
        },
        {
          type: "text",
          text: " prop to pass in all of your items, and use the ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "ComboboxOptions",
        },
        {
          type: "text",
          text: " render prop to provide the template for an individual option:",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "Open the combobox and scroll through the 1,000 options",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "Select user",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "jsx",
      },
      content: [
        {
          type: "text",
          text: "import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'\nimport { ChevronDownIcon } from '@heroicons/react/20/solid'\nimport { useState } from 'react'\n\nconst people = [\n  { id: 1, name: 'Rossie Abernathy' },\n  { id: 2, name: 'Juana Abshire' },\n  { id: 3, name: 'Leonel Abshire' },\n  { id: 4, name: 'Llewellyn Abshire' },\n  { id: 5, name: 'Ramon Abshire' },\n  // ...up to 1000 people\n]\n\nfunction Example() {\n  const [query, setQuery] = useState('')\n  const [selected, setSelected] = useState(people[0])\n\n  const filteredPeople =\n    query === ''\n      ? people\n      : people.filter((person) => {\n          return person.name.toLowerCase().includes(query.toLowerCase())\n        })\n\n  return (\n    <Combobox\n      value={selected}\n      virtual={{ options: filteredPeople }}\n      onChange={(value) => setSelected(value)}\n      onClose={() => setQuery('')}\n    >\n      <div>\n        <ComboboxInput\n          displayValue={(person) => person?.name}\n          onChange={(event) => setQuery(event.target.value)}\n        />\n        <ComboboxButton>\n          <ChevronDownIcon />\n        </ComboboxButton>\n      </div>\n      <ComboboxOptions>\n        {({ option: person }) => (\n          <ComboboxOption key={person.id} value={person}>\n            {person.name}\n          </ComboboxOption>\n        )}\n      </ComboboxOptions>\n    </Combobox>\n  )\n}\n",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Check out the new ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://headlessui.com/react/combobox#virtual-scrolling",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "virtual scrolling documentation",
        },
        {
          type: "text",
          text: " to learn more.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/headless-ui-v2#new-website-and-improved-docs",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "New website and improved docs",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "To go along with this major release, we’ve also significantly revamped the documentation and given the website a fresh coat of paint:",
        },
      ],
    },
    {
      type: "image",
      attrs: {
        src: "https://tailwindcss.com/_next/static/media/new-website.c20be03f.jpg",
        alt: "New Headless UI v2.0 website",
        title: null,
        width: null,
        height: null,
      },
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Head over to the new ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "http://headlessui.com",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "headlessui.com",
        },
        {
          type: "text",
          text: " to check it out!",
        },
      ],
    },
  ],
};

export const blog5 = {
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: {
        level: 1,
      },
      content: [
        {
          type: "text",
          text: "Tuesday, March 19, 2024",
        },
      ],
    },
    {
      type: "bulletList",
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Adam Wathan",
                },
              ],
            },
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://twitter.com/adamwathan",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-sky-500 hover:text-sky-600 dark:text-sky-400",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "@adamwathan",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We’re hiring a ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/careers/design-engineer",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Design Engineer",
        },
        {
          type: "text",
          text: " and ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/careers/staff-software-engineer",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Staff Software Engineer",
        },
        {
          type: "text",
          text: " to work on some ambitious new projects with us.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We’re small on purpose, and we take a lot of pride in punching above our weight. We’re six people, but Tailwind CSS is installed over 30 million times per month, and is used by the world’s biggest companies to build the world’s best websites.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We’re independent and profitable, and we do this because it’s fun. We’re in this to enjoy the actual work we do every day, not to grind it out in hopes of a big exit in the future.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "If this sounds like the sort of place you’d like to work, we’d love to hear from you.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/hiring-a-design-engineer-and-staff-engineer#design-engineer",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Design Engineer",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We’re hiring a ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/careers/design-engineer",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Design Engineer",
        },
        {
          type: "text",
          text: " to build ambitious interfaces, prototype new ideas, and push the boundaries of what’s possible with Tailwind CSS.",
        },
      ],
    },
    {
      type: "image",
      attrs: {
        src: "https://tailwindcss.com/_next/static/media/design-engineer.8b1f0956.jpg",
        alt: "Design engineer",
        title: null,
        width: null,
        height: null,
      },
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "You’d be responsible for things like:",
        },
      ],
    },
    {
      type: "bulletList",
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Design and build ambitious marketing websites",
                },
                {
                  type: "text",
                  text: " for our open-source projects, commercial products, and events like Tailwind Connect.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Design and prototype new features for Tailwind CSS",
                },
                {
                  type: "text",
                  text: " to make sure we’re always using the full potential of the platform.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Create new components and templates for Tailwind UI",
                },
                {
                  type: "text",
                  text: ", taking them all the way from initial concept to shipped.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Enhance our documentation with visual demos",
                },
                {
                  type: "text",
                  text: " to make it easy for people to understand and apply complex CSS features in their work.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Teach and inspire our audience",
                },
                {
                  type: "text",
                  text: " by breaking down interesting things you design and build as articles and social media posts.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Here are some real examples of projects you would have worked on in the last few months:",
        },
      ],
    },
    {
      type: "bulletList",
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Design and build the ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://connect.tailwindcss.com/",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "Tailwind Connect",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: " microsite",
                },
                {
                  type: "text",
                  text: " — including coming up with a unique Markdown-driven badge design experience.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Craft the ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://catalyst.tailwindui.com/docs/dialog",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "first components",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: " for Catalyst",
                },
                {
                  type: "text",
                  text: " — our first fully-componentized React UI kit.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Build a tool for capturing videos for our ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://tailwindcss.com/showcase",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "Showcase",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: " site",
                },
                {
                  type: "text",
                  text: " — to automate creating preview videos that feel like a real person scrolling through a site.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Build ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://tailwindcss.com/docs/height#dynamic-viewport-height",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "interactive demos",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: " to explain dynamic viewport units",
                },
                {
                  type: "text",
                  text: " — to include in the documentation along with the release of Tailwind CSS v3.4.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "After you start, you’d work on upcoming projects like:",
        },
      ],
    },
    {
      type: "bulletList",
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Design and build an interactive microsite for the Tailwind CSS v4.0 release",
                },
                {
                  type: "text",
                  text: " with thoughtfully crafted demos that communicate the most important improvements in a visual way.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Prototype APIs for scroll-driven animations in Tailwind CSS",
                },
                {
                  type: "text",
                  text: ", finding the right balance between simplicity and flexibility, and making our users feel like they have superpowers.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Explore new color palettes with automatic dark mode support",
                },
                {
                  type: "text",
                  text: ", carefully figuring out the right abstractions for different levels of hierarchy that apply universally to different projects.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Research and design text-shadow support for Tailwind CSS",
                },
                {
                  type: "text",
                  text: ", finally.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "This is a fully remote position with a salary of ",
        },
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "$275,000 USD",
        },
        {
          type: "text",
          text: ", open to candidates in the Eastern (UTC-5) to Central European (UTC+1) timezones.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/careers/design-engineer",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Learn more about this role and apply →",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/hiring-a-design-engineer-and-staff-engineer#staff-software-engineer",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Staff Software Engineer",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We’re hiring a ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/careers/staff-software-engineer",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Staff Software Engineer",
        },
        {
          type: "text",
          text: " to work on Tailwind CSS, Headless UI, and our supporting ecosystem of tools like the Tailwind CSS IntelliSense extension for VS Code.",
        },
      ],
    },
    {
      type: "image",
      attrs: {
        src: "https://tailwindcss.com/_next/static/media/staff-engineer.edafb033.jpg",
        alt: "Staff engineer",
        title: null,
        width: null,
        height: null,
      },
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "You’d have a wide range of responsibilities, including:",
        },
      ],
    },
    {
      type: "bulletList",
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Build and document new features",
                },
                {
                  type: "text",
                  text: " for projects like Tailwind CSS and Headless UI.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Contribute improvements to upstream projects",
                },
                {
                  type: "text",
                  text: " like Lightning CSS, Next.js, and Vite.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Maintain CI workflows and automations",
                },
                {
                  type: "text",
                  text: " for running tests and building releases.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Manage issues and contributions",
                },
                {
                  type: "text",
                  text: " from the community to our open-source repositories.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Define and uphold engineering standards",
                },
                {
                  type: "text",
                  text: " with a focus on code quality, performance, and documentation, to make sure we’re always shipping work we can be proud of.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Manage project priorities and adjust scope",
                },
                {
                  type: "text",
                  text: " to meet project deadlines without sacrifing on top-level goals.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Here are some real examples of projects you would have worked on in the last few months:",
        },
      ],
    },
    {
      type: "bulletList",
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Create a ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://github.com/tailwindlabs/tailwindcss/blob/0ee3508179966a767b7802a7262bb9d4ce2221da/oxide/crates/core/src/lib.rs",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "Rust library",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: " for extracting utility class names",
                },
                {
                  type: "text",
                  text: " — a tool that can scan an entire directory of template files as fast as possible and extract potential class names in parallel.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Write a ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://github.com/tailwindlabs/tailwindcss/blob/0ee3508179966a767b7802a7262bb9d4ce2221da/packages/tailwindcss/src/css-parser.ts",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "fast CSS parser",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: " in TypeScript",
                },
                {
                  type: "text",
                  text: " — to parse only the exact amount of detail needed by Tailwind’s internals, looking for domain-specific shortcuts to make it significantly faster than existing libraries for our needs.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Fix an issue with ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://github.com/tailwindlabs/headlessui/pull/2891",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "scroll-locking",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: " in Headless UI",
                },
                {
                  type: "text",
                  text: " — to make sure scrollable elements in dialogs can still be scrolled on iOS.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Campaign for ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://github.com/vitejs/vite/pull/16135",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "new APIs",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: " we need in Vite",
                },
                {
                  type: "text",
                  text: " — prepare a compelling argument for improvements we need to support Tailwind CSS and collaborate with the Vite core team to prototype a solution.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "After you start, you’d work on upcoming projects like:",
        },
      ],
    },
    {
      type: "bulletList",
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Develop a Tailwind CSS bundler plugin for Next.js",
                },
                {
                  type: "text",
                  text: " — to generate your CSS using the module graph instead of scanning the file system, working with our contacts at Vercel to get it right.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Design a set of IDE integration APIs for Tailwind CSS",
                },
                {
                  type: "text",
                  text: " — first-class, stable, documented APIs that editor teams like JetBrains can rely on to add things like completions, lint warnings, class sorting, and more to their tools.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Design, build, and document a Tooltip component for Headless UI",
                },
                {
                  type: "text",
                  text: " — making sure it’s fully accessible, with a flexible but delightful API.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Build a backwards compatibility layer for Tailwind CSS v4.0",
                },
                {
                  type: "text",
                  text: " — re-introduce support for JavaScript configuration files, explore codemod tooling, and make sure existing community plugins are as compatible as possible with the new engine.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "This is a fully remote position with a salary of ",
        },
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "$275,000 USD",
        },
        {
          type: "text",
          text: ", open to candidates in the Eastern (UTC-5) to Central European (UTC+1) timezones.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/careers/staff-software-engineer",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Learn more about this role and apply →",
        },
      ],
    },
  ],
};

export const blog6 = {
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: {
        level: 1,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "Open-sourcing our progress on Tailwind CSS v4.0",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Date",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Wednesday, March 6, 2024",
        },
      ],
    },
    {
      type: "bulletList",
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Adam Wathan",
                },
              ],
            },
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://twitter.com/adamwathan",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-sky-500 hover:text-sky-600 dark:text-sky-400",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "@adamwathan",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "image",
      attrs: {
        src: "https://tailwindcss.com/_next/static/media/card.7fed5563.jpg",
        alt: "Tailwind CSS v4.0-alpha",
        title: null,
        width: null,
        height: null,
      },
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Last summer at Tailwind Connect ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://www.youtube.com/watch?v=CLkxRnRQtDE&t=2146s",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "I shared a preview of Oxide",
        },
        {
          type: "text",
          text: " — a new high-performance engine for Tailwind CSS that we’ve been working on, designed to simplify the developer experience and take advantage of how the web platform has evolved in recent years.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "The new engine was originally going to ship as a v3.x release, but even though we’re committed to backwards compatibility, this feels so clearly like a new generation of the framework that it deserves to be v4.0.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "It’s still early and we’ve got ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/tailwindcss-v4-alpha#roadmap-to-v4-0",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "a lot of work to do",
        },
        {
          type: "text",
          text: ", but today we’re ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://github.com/tailwindlabs/tailwindcss/tree/next",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "open-sourcing our progress",
        },
        {
          type: "text",
          text: " and tagging the first public ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://www.npmjs.com/package/tailwindcss/v/4.0.0-alpha.3",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "v4.0.0-alpha",
        },
        {
          type: "text",
          text: " so you can start experimenting with it and help us get to a stable release later this year.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "I’ll try keep it brief to save some of the excitement for the stable release, but if you like to play with very early and experimental stuff, there should be plenty of information here to get you going.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/tailwindcss-v4-alpha#a-new-engine-built-for-speed",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "A new engine, built for speed",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "The new engine is a ground-up rewrite, using everything we know about the framework now to better model the problem space, making things faster with a lot less code.",
        },
      ],
    },
    {
      type: "bulletList",
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Up to 10x faster",
                },
                {
                  type: "text",
                  text: " — we can do a full build of the Tailwind CSS website in 105ms instead of 960ms, or our Catalyst UI kit in 55ms instead of 341ms.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Smaller footprint",
                },
                {
                  type: "text",
                  text: " — the new engine is over 35% smaller installed, even with the heavier native packages we ship like the parts we’ve rewritten in Rust and Lightning CSS.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Rust where it counts",
                },
                {
                  type: "text",
                  text: " — we’ve migrated some of the most expensive and parallelizable parts of the framework to Rust, while keeping the core of the framework in TypeScript for extensibility.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "One dependency",
                },
                {
                  type: "text",
                  text: " — the only thing the new engine depends on is Lightning CSS.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Custom parser",
                },
                {
                  type: "text",
                  text: " — we wrote our own CSS parser and designed our own data structures tailored to our needs, making parsing over 2x as fast for us as it was with PostCSS.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/tailwindcss-v4-alpha#unified-toolchain",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Unified toolchain",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Tailwind CSS v4 isn’t just a plugin anymore — it’s an all-in-one tool for processing your CSS. We’ve integrated ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://lightningcss.dev/",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Lightning CSS",
        },
        {
          type: "text",
          text: " directly into the framework so you don’t have to configure anything about your CSS pipeline.",
        },
      ],
    },
    {
      type: "bulletList",
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Built-in ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "@import",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: " handling",
                },
                {
                  type: "text",
                  text: " — no need to setup and configure a tool like ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "postcss-import",
                },
                {
                  type: "text",
                  text: ".",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Built-in vendor prefixing",
                },
                {
                  type: "text",
                  text: " — you don’t have to add ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "autoprefixer",
                },
                {
                  type: "text",
                  text: " to your projects anymore.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Built-in nesting support",
                },
                {
                  type: "text",
                  text: " — no plugins needed to flatten nested CSS, it works out of the box.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Syntax transforms",
                },
                {
                  type: "text",
                  text: " — modern CSS features like ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "oklch()",
                },
                {
                  type: "text",
                  text: " colors and media query ranges are transpiled to syntax with better browser support.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We’re still shipping a PostCSS plugin, but we’re also exploring first-party bundler plugins, and we’re shipping an official Vite plugin with this first alpha release that you can try out today.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/tailwindcss-v4-alpha#designed-for-the-modern-web",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Designed for the modern web",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We’re looking into the future with Tailwind CSS v4 and trying to build a framework that’s going to feel cutting edge for years to come.",
        },
      ],
    },
    {
      type: "bulletList",
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Native cascade layers",
                },
                {
                  type: "text",
                  text: " — we’re using real ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "@layer",
                },
                {
                  type: "text",
                  text: " rules now, which solves a ton of specificity problems we’ve wrestled with in the past.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Explicitly defined custom properties",
                },
                {
                  type: "text",
                  text: " — we use ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "@property",
                },
                {
                  type: "text",
                  text: " to define our internal custom properties with proper types and constraints, making it possible to do things like transition background gradients.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Using ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "color-mix",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: " for opacity modifiers",
                },
                {
                  type: "text",
                  text: " — making it easier than ever to use our opacity modifier syntax when using CSS variables for colors, or even adjusting the opacity of ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "currentColor",
                },
                {
                  type: "text",
                  text: ".",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Container queries in core",
                },
                {
                  type: "text",
                  text: " — we’ve added support for container queries directly to core, with new ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "@min-*",
                },
                {
                  type: "text",
                  text: " and ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "@max-*",
                },
                {
                  type: "text",
                  text: " variants to support container query ranges.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We’re also working on refreshing our color palette with wide gamut colors, and introducing support for other modern CSS features like ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "@starting-style",
        },
        {
          type: "text",
          text: ", anchor positioning, and more.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/tailwindcss-v4-alpha#composable-variants",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Composable variants",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "The new architecture makes it possible to compose together variants that act on other selectors, like ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "group-*",
        },
        {
          type: "text",
          text: ", ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "peer-*",
        },
        {
          type: "text",
          text: ", ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "has-*",
        },
        {
          type: "text",
          text: ", and a new ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "not-*",
        },
        {
          type: "text",
          text: " variant we’re introducing for v4.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "In earlier releases, variants like ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "group-has-*",
        },
        {
          type: "text",
          text: " were explicitly defined in the framework, but now ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "group-*",
        },
        {
          type: "text",
          text: " can compose with the existing ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "has-*",
        },
        {
          type: "text",
          text: " variant, which can compose with other variants like ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "focus",
        },
        {
          type: "text",
          text: ":",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "index.html",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "diff-html",
      },
      content: [
        {
          type: "text",
          text: '<div class="group">\n  <div class="group-has-[&:focus]:opacity-100">\n  <div class="group-has-focus:opacity-100">\n    <!-- ... -->\n  </div>\n</div>\n',
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "There’s no limits to this composability, and you can even write stuff like ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "group-not-has-peer-not-data-active:underline",
        },
        {
          type: "text",
          text: " if for some horrible reason that’s what you need to do.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/tailwindcss-v4-alpha#zero-configuration-content-detection",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Zero-configuration content detection",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "You’ll notice that at least in these early alpha releases, it’s not even possible to configure your ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "content",
        },
        {
          type: "text",
          text: " paths. For most projects, you’re never going to need to do this ever again — Tailwind just finds your template files for you.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We do this using one of two ways depending on how you’ve integrated Tailwind into your project:",
        },
      ],
    },
    {
      type: "bulletList",
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Using the PostCSS plugin or the CLI",
                },
                {
                  type: "text",
                  text: ", Tailwind will crawl your entire project looking for template files, using a bunch of heuristics we’ve built in to keep things fast, like not crawling directories that are in your ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: ".gitignore",
                },
                {
                  type: "text",
                  text: " file, and ignoring binary file formats.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Using the Vite plugin",
                },
                {
                  type: "text",
                  text: ", we rely on the module graph. This is amazing because we know exactly what files you’re actually using, so it’s maximally performant, and with no false positives or negatives. We’re hoping to expand this approach outside of the Vite ecosystem with other bundler plugins in the future.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We’ll introduce a way to configure content paths explicitly in the future for sure, but we’re curious to see how well this automatic approach works for everyone — it’s working awesome in our own projects.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/tailwindcss-v4-alpha#css-first-configuration",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "CSS-first configuration",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "A major goal of Tailwind CSS v4.0 is making the framework feel CSS-native, and less like a JavaScript library.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Once you’ve installed it, you add it to your project with a regular CSS ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "@import",
        },
        {
          type: "text",
          text: " statement:",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "main.css",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "css",
      },
      content: [
        {
          type: "text",
          text: '@import "tailwindcss";\n\n',
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "And instead of setting up all of your customizations in a JavaScript configuration file, you just use CSS variables:",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "main.css",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "css",
      },
      content: [
        {
          type: "text",
          text: '@import "tailwindcss";\n\n@theme {\n  --font-family-display: "Satoshi", "sans-serif";\n\n  --breakpoint-3xl: 1920px;\n\n  --color-neon-pink: oklch(71.7% 0.25 360);\n  --color-neon-lime: oklch(91.5% 0.258 129);\n  --color-neon-cyan: oklch(91.3% 0.139 195.8);\n}',
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "The special ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "@theme",
        },
        {
          type: "text",
          text: " directive tells Tailwind to make new utilities and variants available based on those variables, letting you use classes like ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "3xl:text-neon-lime",
        },
        {
          type: "text",
          text: " in your markup:",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "index.html",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "html",
      },
      content: [
        {
          type: "text",
          text: '<div class="max-w-lg 3xl:max-w-xl">\n  <h1 class="font-display text-4xl">\n    Data to <span class="text-neon-cyan">enrich</span> your online business\n  </h1>\n</div>',
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Adding new CSS variables behaves like ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "extend",
        },
        {
          type: "text",
          text: " did in earlier versions of the framework, but you can override a whole set of variables by clearing the namespace with syntax like ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "--color-*: initial",
        },
        {
          type: "text",
          text: " before defining all of your custom values:",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "main.css",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "css",
      },
      content: [
        {
          type: "text",
          text: '@import "tailwindcss";\n\n@theme {\n  --color-*: initial;\n\n  --color-gray-50: #f8fafc;\n  --color-gray-100: #f1f5f9;\n  --color-gray-200: #e2e8f0;\n  /* ... */\n  --color-green-800: #3f6212;\n  --color-green-900: #365314;\n  --color-green-950: #1a2e05;\n}',
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We’re still fine-tuning some of the naming conventions, but you can ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://github.com/tailwindlabs/tailwindcss/blob/next/packages/tailwindcss/theme.css",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "explore the default theme on GitHub",
        },
        {
          type: "text",
          text: " to see what’s available to customize.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "If you don’t want to explicitly clear the default theme and would rather start from scratch, you can import ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: '"tailwindcss/preflight"',
        },
        {
          type: "text",
          text: " and ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: '"tailwindcss/utilities"',
        },
        {
          type: "text",
          text: " directly to skip importing the default theme:",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "main.css",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "diff-css",
      },
      content: [
        {
          type: "text",
          text: '@import "tailwindcss";\n@import "tailwindcss/preflight" layer(base);\n@import "tailwindcss/utilities" layer(utilities);\n\n@theme {\n  --color-*: initial;\n  --color-gray-50: #f8fafc;\n  --color-gray-100: #f1f5f9;\n  --color-gray-200: #e2e8f0;\n  /* ... */\n  --color-green-800: #3f6212;\n  --color-green-900: #365314;\n  --color-green-950: #1a2e05;\n}\n',
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We also make all of your theme values available as native CSS variables in your custom CSS:",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "dist/main.css",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "css",
      },
      content: [
        {
          type: "text",
          text: ":root {\n  --color-gray-50: #f8fafc;\n  --color-gray-100: #f1f5f9;\n  --color-gray-200: #e2e8f0;\n  /* ... */\n  --color-green-800: #3f6212;\n  --color-green-900: #365314;\n  --color-green-950: #1a2e05;\n}",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "This makes it easy to reference any of your theme values in arbitrary values without needing the ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "theme()",
        },
        {
          type: "text",
          text: " function:",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "index.html",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "html",
      },
      content: [
        {
          type: "text",
          text: '<div class="p-[calc(var(--spacing-6)-1px)]">\n  <!-- ... -->\n</div>',
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "It also makes it possible to use your theme values when working with UI libraries like Framer Motion, without having to use the ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "resolveConfig()",
        },
        {
          type: "text",
          text: " function:",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "JSX",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "jsx",
      },
      content: [
        {
          type: "text",
          text: "import { motion } from \"framer-motion\"\n\nexport const MyComponent = () => (\n  <motion.div\n    initial={{ y: 'var(--spacing-8)' }}\n    animate={{ y: 0 }}\n    exit={{ y: 'var(--spacing-8)' }}\n  >\n    {children}\n  </motion.div>\n)",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/tailwindcss-v4-alpha#whats-changed",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "What’s changed",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We don’t take breaking changes lightly, but there are a few things we’re doing differently in v4 so far that are worth sharing:",
        },
      ],
    },
    {
      type: "bulletList",
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Removed deprecated utilities",
                },
                {
                  type: "text",
                  text: " — we’ve removed utilities we stopped documenting a long time ago like ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "text-opacity-*",
                },
                {
                  type: "text",
                  text: ", ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "flex-grow-*",
                },
                {
                  type: "text",
                  text: ", and ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "decoration-slice",
                },
                {
                  type: "text",
                  text: " in favor of their modern replacements like ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "text-{color}/*",
                },
                {
                  type: "text",
                  text: ", ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "grow-*",
                },
                {
                  type: "text",
                  text: ", and ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "box-decoration-slice",
                },
                {
                  type: "text",
                  text: ".",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "PostCSS plugin and CLI are separate packages",
                },
                {
                  type: "text",
                  text: " — the main ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "tailwindcss",
                },
                {
                  type: "text",
                  text: " package doesn’t include these anymore since not everyone needs them, instead they should be installed separately using ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "@tailwindcss/postcss",
                },
                {
                  type: "text",
                  text: " and ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "@tailwindcss/cli",
                },
                {
                  type: "text",
                  text: ".",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "No default border color",
                },
                {
                  type: "text",
                  text: " — the ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "border",
                },
                {
                  type: "text",
                  text: " utility used to default to ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "gray-200",
                },
                {
                  type: "text",
                  text: ", but now it defaults to ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "currentColor",
                },
                {
                  type: "text",
                  text: " like the browser does. We made this change to make it harder to accidentally introduce a wrong gray into your project if you’re using ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "zinc",
                },
                {
                  type: "text",
                  text: " or ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "slate",
                },
                {
                  type: "text",
                  text: " or something else as your main gray.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Rings are 1px by default",
                },
                {
                  type: "text",
                  text: " — the ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "ring",
                },
                {
                  type: "text",
                  text: " utility used to be a 3px blue ring by default, now it’s a 1px ring using ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "currentColor",
                },
                {
                  type: "text",
                  text: ". We find ourselves using the ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "ring-*",
                },
                {
                  type: "text",
                  text: " utilities as an alternative to borders in our projects, and using ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "outline-*",
                },
                {
                  type: "text",
                  text: " for focus rings, so we think making things consistent here is a helpful change.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "There are a handful of other really low-level implementation detail changes that might surface in some way in your projects, but nothing deliberate like these changes. If you bump into anything surprising, let us know.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/tailwindcss-v4-alpha#roadmap-to-v4-0",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Roadmap to v4.0",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "This new engine is a ground-up rewrite, and up until now we’ve been focused entirely on this reimagined developer experience using the new configuration approach.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "We put an enormous amount of value in backwards compatibility",
        },
        {
          type: "text",
          text: ", and that’s where the bulk of the work lies before we can tag a stable v4.0 release later this year.",
        },
      ],
    },
    {
      type: "bulletList",
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Support for JavaScript configuration files",
                },
                {
                  type: "text",
                  text: " — reintroducing compatibility with the classic ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "tailwind.config.js",
                },
                {
                  type: "text",
                  text: " file to make migrating to v4 easy.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Explicit content path configuration",
                },
                {
                  type: "text",
                  text: " — making it possible to tell Tailwind exactly where your templates are when automatic content detection isn’t good enough for your setup.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Support for other dark modes",
                },
                {
                  type: "text",
                  text: " — right now we only support dark mode using media queries, and still need to reimplement the selector and variant strategies.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Plugins and custom utilities",
                },
                {
                  type: "text",
                  text: " — we don’t have support for plugins, or for writing custom utilities that automatically work with variants yet. Obviously we will make this work before a stable release.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Prefix support",
                },
                {
                  type: "text",
                  text: " — there’s no way to configure a prefix for your classes yet, but we’ll bring it back for sure.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Safelists and blocklists",
                },
                {
                  type: "text",
                  text: " — can’t force Tailwind to generate certain classes or prevent it from generating other classes yet.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Support for ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "important",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: " configuration",
                },
                {
                  type: "text",
                  text: " — there’s no way to make utilities all generate with ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "!important",
                },
                {
                  type: "text",
                  text: " right now, but we plan to implement it.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Support for the ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "theme()",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: " function",
                },
                {
                  type: "text",
                  text: " — this isn’t needed for new projects because you can use ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "var()",
                },
                {
                  type: "text",
                  text: " now, but we’ll implement it for backwards compatibility.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Standalone CLI",
                },
                {
                  type: "text",
                  text: " — we haven’t worked on a standalone CLI for the new engine yet, but will absolutely have it before the v4.0 release.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Aside from that, I’m sure we’ll find a lot of bugs to fix, some exciting new CSS features to sneak in, and refine some of these new APIs that need some more polish before a proper release.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "I don’t want to make promises on a specific release timeline, but I’d personally love to mark v4.0 as stable before the summer holiday season kicks in.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/tailwindcss-v4-alpha#try-out-the-alpha",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Try out the alpha",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We’ve tagged a couple alpha releases already, and you can start playing with it in your projects today.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "If you’re using the Tailwind CSS IntelliSense extension for VS Code, make sure you switch to the prerelease version from the extension page, and if you’re using our Prettier plugin, make sure you install the latest version.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "If you find an issue, please ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://github.com/tailwindlabs/tailwindcss/issues/new/choose",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "let us know on GitHub",
        },
        {
          type: "text",
          text: ". We really want this thing to be bullet-proof before we tag a stable release and reporting any problems you find will help us a lot.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 3,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/tailwindcss-v4-alpha#using-vite",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Using Vite",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Install the Tailwind CSS v4 alpha and our new Vite plugin:",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "bash",
      },
      content: [
        {
          type: "text",
          text: "$ npm install tailwindcss@next @tailwindcss/vite@next",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Then add our plugin to your ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "vite.config.ts",
        },
        {
          type: "text",
          text: " file:",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "vite.config.ts",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "ts",
      },
      content: [
        {
          type: "text",
          text: "import tailwindcss from '@tailwindcss/vite'\nimport { defineConfig } from 'vite'\n\nexport default defineConfig({\n  plugins: [tailwindcss()],\n})",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Finally, import Tailwind in your main CSS file:",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "app.css",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "css",
      },
      content: [
        {
          type: "text",
          text: '@import "tailwindcss";',
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 3,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/tailwindcss-v4-alpha#using-post-css",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Using PostCSS",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Install the Tailwind CSS v4 alpha and the separate PostCSS plugin package:",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "bash",
      },
      content: [
        {
          type: "text",
          text: "$ npm install tailwindcss@next @tailwindcss/postcss@next",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Then add our plugin to your ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "postcss.config.js",
        },
        {
          type: "text",
          text: " file:",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "postcss.config.js",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "js",
      },
      content: [
        {
          type: "text",
          text: "module.exports = {\n  plugins: {\n    '@tailwindcss/postcss': {}\n  }\n}",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Finally, import Tailwind in your main CSS file:",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "app.css",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "css",
      },
      content: [
        {
          type: "text",
          text: '@import "tailwindcss";',
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 3,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/tailwindcss-v4-alpha#using-the-cli",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Using the CLI",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Install the Tailwind CSS v4 alpha and the separate CLI package:",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "bash",
      },
      content: [
        {
          type: "text",
          text: "$ npm install tailwindcss@next @tailwindcss/cli@next",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Next, import Tailwind in your main CSS file:",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "app.css",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "css",
      },
      content: [
        {
          type: "text",
          text: '@import "tailwindcss";',
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Finally, compile your CSS using the CLI tool:",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "bash",
      },
      content: [
        {
          type: "text",
          text: "$ npx @tailwindcss/cli@next -i app.css -o dist/app.css",
        },
      ],
    },
  ],
};

export const blog7 = {
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: {
        level: 1,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "Introducing Catalyst: A modern UI kit for React",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Date",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Thursday, December 21, 2023",
        },
      ],
    },
    {
      type: "bulletList",
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Adam Wathan",
                },
              ],
            },
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://twitter.com/adamwathan",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-sky-500 hover:text-sky-600 dark:text-sky-400",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "@adamwathan",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Today’s the day — we just published the first development preview of ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindui.com/templates/catalyst",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Catalyst",
        },
        {
          type: "text",
          text: ", just in time for your holiday hacking sessions.",
        },
      ],
    },
    {
      type: "image",
      attrs: {
        src: "https://tailwindcss.com/_next/static/media/catalyst-ui-kit.1b90ff54.png",
        alt: "Overview of components included in Catalyst",
        title: null,
        width: null,
        height: null,
      },
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "Catalyst is our first fully-componentized, batteries-included application UI kit",
        },
        {
          type: "text",
          text: " — real React components with thoughtfully designed APIs that build on each other to create a real component architecture, the same way we’d do it in a real application.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Check out the ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://catalyst.tailwindui.com/",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "live demo",
        },
        {
          type: "text",
          text: ", read the ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://catalyst.tailwindui.com/docs",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "documentation",
        },
        {
          type: "text",
          text: ", and if you’re a Tailwind UI All-Access customer, ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindui.com/templates/catalyst/download",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "download it",
        },
        {
          type: "text",
          text: " and try it out in a new project today.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "Catalyst is currently in development preview",
        },
        {
          type: "text",
          text: " and there’s a lot more to come, but we’re releasing it today so you can play with it right away as we continue to build new components and find ways to make it an even better experience.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/introducing-catalyst#your-components-not-ours",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Your components, not ours",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "With Catalyst, we set out to build a UI kit that tomorrow’s Stripe or Linear would feel good about using to build their products — design-obsessed teams who want to own their UI components, and would never choose an off-the-shelf library.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "So it’s not a dependency you install, instead you download the source and copy the components into your own project where they become the starting point for your own component system:",
        },
      ],
    },
    {
      type: "image",
      attrs: {
        src: "https://tailwindcss.com/_next/static/media/catalyst-installation.fcfdb479.jpg",
        alt: "",
        title: null,
        width: null,
        height: null,
      },
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Want to change the border radius on your buttons? Just open ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "button.tsx",
        },
        {
          type: "text",
          text: " and change some classes. You don’t need to open a GitHub issue and try to convince us to expose a new configuration option.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Catalyst is a “disappearing UI kit” — six months after you’ve installed it, you should almost forget it wasn’t you who built the original components.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/introducing-catalyst#design-is-in-the-details",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Design is in the details",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Getting the visual style right on a project like this is hard. We went into it with a few goals:",
        },
      ],
    },
    {
      type: "bulletList",
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Be competitive",
                },
                {
                  type: "text",
                  text: " — we wanted to design something that could hold its own next to some of the nicest interfaces on the web today.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Be timeless",
                },
                {
                  type: "text",
                  text: " — we didn’t want to design something that would look dated in 6 months because it leaned too hard into specific trends.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Be productive",
                },
                {
                  type: "text",
                  text: " — whatever we designed needed to feel fast and efficient to real users, not just look great in a Dribbble shot.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "It took a lot of work and there were a lot of trade-offs to balance, but I’m really in love with where we ended up:",
        },
      ],
    },
    {
      type: "image",
      attrs: {
        src: "https://tailwindcss.com/_next/static/media/catalyst-components.b9284341.png",
        alt: "",
        title: null,
        width: null,
        height: null,
      },
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "To be competitive",
        },
        {
          type: "text",
          text: ", we invested in lots of details like subtle backdrop blurs on dropdown menus, perfecting the way shadows and borders blend with each other on form controls, and thoughtful use of animation in things like dialogs and toggle switches.",
        },
      ],
    },
    {
      type: "image",
      attrs: {
        src: "https://tailwindcss.com/_next/static/media/catalyst-shadow-detail.7367bda7.png",
        alt: "",
        title: null,
        width: null,
        height: null,
      },
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "To be timeless",
        },
        {
          type: "text",
          text: ", we tried to strike the right balance between flat and skeuomorphic design, with just enough depth cues that our components will look great even if the trends change a bit in either direction.",
        },
      ],
    },
    {
      type: "image",
      attrs: {
        src: "https://tailwindcss.com/_next/static/media/catalyst-buttons.9ec6b2a1.png",
        alt: "",
        title: null,
        width: null,
        height: null,
      },
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We also took inspiration from the browser, and used unopinionated blue focus rings to avoid picking a treatment that might soon look out of fashion.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "To be productive",
        },
        {
          type: "text",
          text: ", we worked carefully to make sure there was still plenty of whitespace, but that the UI was still dense enough to fit plenty of information on the screen.",
        },
      ],
    },
    {
      type: "image",
      attrs: {
        src: "https://tailwindcss.com/_next/static/media/catalyst-table.b144027a.png",
        alt: "",
        title: null,
        width: null,
        height: null,
      },
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We also limited our use of transitions and animations only to places where it felt important, and even then tried to keep them fast so it never feels like you’re waiting on the UI.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "Catalyst also ships with full dark mode support",
        },
        {
          type: "text",
          text: ", and anything you build with Catalyst components automatically adapts between light and dark modes.",
        },
      ],
    },
    {
      type: "image",
      attrs: {
        src: "https://tailwindcss.com/_next/static/media/catalyst-components-dark-mode.bf236b3b.png",
        alt: "",
        title: null,
        width: null,
        height: null,
      },
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "It’s not obvious, but there are a ton of little details we had to change to make things look their best in dark mode, like adjusting shadows, changing outer rings to inner rings to mimic the change in lighting, and more.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/introducing-catalyst#modeled-after-html",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Modeled after HTML",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We spent a ",
        },
        {
          type: "text",
          marks: [
            {
              type: "italic",
            },
          ],
          text: "lot",
        },
        {
          type: "text",
          text: " of time working on the component APIs, trying very hard to make things really easy to drop in and use right away, without compromising on flexibility.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "It’s common for UI libraries to use APIs like this:",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "JSX",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "jsx",
      },
      content: [
        {
          type: "text",
          text: 'function Example() {\n  return (\n    <TextField\n      name="product_name"\n      label="Product name"\n      description="Use the name you\'d like people to see in their cart."\n    />\n  )\n}',
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "But with all the props living on the same component, it starts to get difficult to do things like add a class just to the ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "<input>",
        },
        {
          type: "text",
          text: " element itself.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Ultimately that led us to APIs that closely mirrored HTML, where it’s rare that a single component renders more than one element.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Creating a text field with Catalyst looks like this for example:",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "JSX",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "jsx",
      },
      content: [
        {
          type: "text",
          text: "import { Description, Field, Label } from '@/components/fieldset'\nimport { Input } from '@/components/input'\n\nfunction Example() {\n  return (\n    <Field>\n      <Label>Product name</Label>\n      <Description>Use the name you'd like people to see in their cart.</Description>\n      <Input name=\"product_name\" />\n    </Field>\n  )\n}",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "By keeping things composable like this, it makes it really easy to do things like constrain the width of the input, without constraining the width of any of the other elements:",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "JSX",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "diff-jsx",
      },
      content: [
        {
          type: "text",
          text: 'import { Description, Field, Label } from \'@/components/fieldset\'\nimport { Input } from \'@/components/input\'\n\nfunction Example() {\n  return (\n    <Field>\n      <Label>Product name</Label>\n      <Description>Use the name you\'d like people to see in their cart.</Description>\n      <Input name="product_name" />\n      <Input name="product_name" className="max-w-sm" />\n    </Field>\n  )\n}\n',
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "It also makes it easy to move the description ",
        },
        {
          type: "text",
          marks: [
            {
              type: "italic",
            },
          ],
          text: "below",
        },
        {
          type: "text",
          text: " the input, instead of above:",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "JSX",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "diff-jsx",
      },
      content: [
        {
          type: "text",
          text: "import { Description, Field, Label } from '@/components/fieldset'\nimport { Input } from '@/components/input'\n\nfunction Example() {\n  return (\n    <Field>\n      <Label>Product name</Label>\n      <Description>Use the name you'd like people to see in their cart.</Description>\n      <Input name=\"product_name\" className=\"max-w-sm\" />\n      <Description>Use the name you'd like people to see in their cart.</Description>\n    </Field>\n  )\n}\n",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "It took a lot of experimenting to figure out the right way to make these APIs work, especially around details like adding layout styles to the right children, but the payoff was worth it, and these components are really a delight to use.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/introducing-catalyst#powered-by-the-next-generation-of-headless-ui",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Powered by the next generation of Headless UI",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We released the first version of ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://headlessui.com/",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Headless UI",
        },
        {
          type: "text",
          text: " back in the summer of 2020, but it’s been just over a year now since the last significant feature release because of all the work we’ve been focused on with Tailwind CSS itself.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Catalyst was the perfect excuse to get our hands dirty with Headless UI again, and we quickly found lots of ways to improve the project to simplify the code in Catalyst itself.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We just published Headless UI v2.0.0-alpha.1, which includes a ton of new stuff:",
        },
      ],
    },
    {
      type: "bulletList",
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Built-in anchor positioning",
                },
                {
                  type: "text",
                  text: " — using ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://floating-ui.com/",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "Floating UI",
                },
                {
                  type: "text",
                  text: ", components like ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "Menu",
                },
                {
                  type: "text",
                  text: ", ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "Listbox",
                },
                {
                  type: "text",
                  text: ", and more can now automatically position their popovers to be anchored to their trigger, adapting as needed to changes in the viewport.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Headless checkbox component",
                },
                {
                  type: "text",
                  text: " — we’ve added a headless ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "Checkbox",
                },
                {
                  type: "text",
                  text: " component to complement our existing ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "RadioGroup",
                },
                {
                  type: "text",
                  text: " component, making it easy to build totally custom checkbox controls.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "HTML form components",
                },
                {
                  type: "text",
                  text: " — we’ve added ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "Input",
                },
                {
                  type: "text",
                  text: ", ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "Select",
                },
                {
                  type: "text",
                  text: ", ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "Textarea",
                },
                {
                  type: "text",
                  text: ", ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "Label",
                },
                {
                  type: "text",
                  text: ", ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "Description",
                },
                {
                  type: "text",
                  text: ", ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "Fieldset",
                },
                {
                  type: "text",
                  text: ", and ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "Legend",
                },
                {
                  type: "text",
                  text: " components that handle all of the ID generation and ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "aria-*",
                },
                {
                  type: "text",
                  text: " attribute mapping you need to do to connect form fields together.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Improved hover and focus-visible detection",
                },
                {
                  type: "text",
                  text: " — using hooks from the awesome ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://react-spectrum.adobe.com/react-aria/hooks.html",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "React Aria",
                },
                {
                  type: "text",
                  text: " library under the hood, Headless UI now adds smarter ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "data-hover",
                },
                {
                  type: "text",
                  text: " and ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "data-focus",
                },
                {
                  type: "text",
                  text: " attributes to your controls that behave more consistently across different devices than the native pseudo-classes.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Combobox list virtualization",
                },
                {
                  type: "text",
                  text: " — the next version of Headless UI can now handle giant lists of combobox options with no performance issues.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "…with plenty of other improvements to come, including a date picker, tooltips, and more.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "These improvements are React-only for now during this early alpha period, but we plan to bring all of these improvements to Vue as well before tagging v2.0.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We’ll have documentation published for this stuff really soon, but couldn’t resist getting Catalyst out before the holidays, even if it meant publishing the Headless UI docs a few days later.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/introducing-catalyst#try-it-out",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Try it out",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindui.com/templates/catalyst",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Catalyst",
        },
        {
          type: "text",
          text: " is a free update for all ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindui.com/all-access",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Tailwind UI All-Access",
        },
        {
          type: "text",
          text: " customers, and you can ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindui.com/templates/catalyst/download",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "download it",
        },
        {
          type: "text",
          text: " and start playing with this first release today.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "More work went into getting everything we’re releasing today just right than you could ever imagine, but we’re eager for feedback and ways it could be improved, so build some stuff with it and let us know what you think.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We’re going to take a couple weeks to recharge over the holidays, but we’ll be right back into Catalyst in the new year, working on new components like application layouts, comboboxes, command palettes, tooltips, and more.",
        },
      ],
    },
  ],
};

export const blog8 = {
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: {
        level: 1,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "Tailwind CSS v3.4: Dynamic viewport units, :has() support, balanced headlines, subgrid, and more",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Date",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Tuesday, December 19, 2023",
        },
      ],
    },
    {
      type: "bulletList",
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Adam Wathan",
                },
              ],
            },
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://twitter.com/adamwathan",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-sky-500 hover:text-sky-600 dark:text-sky-400",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "@adamwathan",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "image",
      attrs: {
        src: "https://tailwindcss.com/_next/static/media/card.a1cd9cff.jpg",
        alt: "Tailwind CSS v3.3",
        title: null,
        width: null,
        height: null,
      },
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "There’s nothing like building ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://twitter.com/steveschoger/status/1732143245696639167",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "a major new product",
        },
        {
          type: "text",
          text: " for finding all the features you wish you had in your own tools, so we capitalized on some of that inspiration and turned it into this — Tailwind CSS v3.4.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "As always the improvements range from things you’ve been angry about for years, to supporting CSS features you’ve never even heard of and probably can’t even use at work.",
        },
      ],
    },
    {
      type: "bulletList",
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://tailwindcss.com/blog/tailwindcss-v3-4#dynamic-viewport-units",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "Dynamic viewport units:",
                },
                {
                  type: "text",
                  text: " Full-height elements that actually work on mobile.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://tailwindcss.com/blog/tailwindcss-v3-4#new-has-variant",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "New ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: ":has()",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://tailwindcss.com/blog/tailwindcss-v3-4#new-has-variant",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: " variant:",
                },
                {
                  type: "text",
                  text: " Style parent elements based on their children.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://tailwindcss.com/blog/tailwindcss-v3-4#style-children-with-the-variant",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "Style children with the ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "*",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://tailwindcss.com/blog/tailwindcss-v3-4#style-children-with-the-variant",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: " variant:",
                },
                {
                  type: "text",
                  text: " We’ll probably regret giving you this one.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://tailwindcss.com/blog/tailwindcss-v3-4#new-size-utilities",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "New ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "size-*",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://tailwindcss.com/blog/tailwindcss-v3-4#new-size-utilities",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: " utilities:",
                },
                {
                  type: "text",
                  text: " Set width and height at the same time, finally.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://tailwindcss.com/blog/tailwindcss-v3-4#balanced-headlines-with-text-wrap-utilities",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "Balanced headlines with ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "text-wrap",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://tailwindcss.com/blog/tailwindcss-v3-4#balanced-headlines-with-text-wrap-utilities",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: " utilities:",
                },
                {
                  type: "text",
                  text: " No more max-width tweaking or responsive line breaks.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://tailwindcss.com/blog/tailwindcss-v3-4#subgrid-support",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "Subgrid support:",
                },
                {
                  type: "text",
                  text: " That grid feature you struggle to understand, finally in Tailwind CSS.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://tailwindcss.com/blog/tailwindcss-v3-4#extended-min-width-max-width-and-min-height-scales",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "Extended min-width, max-width, and min-height scales:",
                },
                {
                  type: "text",
                  text: " Now ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "min-w-12",
                },
                {
                  type: "text",
                  text: " is a real class.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://tailwindcss.com/blog/tailwindcss-v3-4#extended-opacity-scale",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "Extended opacity scale:",
                },
                {
                  type: "text",
                  text: " For those moments when neither 60% or 70% were quite right.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://tailwindcss.com/blog/tailwindcss-v3-4#extended-grid-rows-scale",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "Extended ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "grid-rows-*",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://tailwindcss.com/blog/tailwindcss-v3-4#extended-grid-rows-scale",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: " scale:",
                },
                {
                  type: "text",
                  text: " Might as well make it match the column scale.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://tailwindcss.com/blog/tailwindcss-v3-4#new-forced-colors-variant",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "New ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "forced-colors",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://tailwindcss.com/blog/tailwindcss-v3-4#new-forced-colors-variant",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: " variant:",
                },
                {
                  type: "text",
                  text: " Easily fine-tune your site for forced colors mode.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://tailwindcss.com/blog/tailwindcss-v3-4#new-forced-color-adjust-utilities",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "New ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "forced-color-adjust",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://tailwindcss.com/blog/tailwindcss-v3-4#new-forced-color-adjust-utilities",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: " utilities:",
                },
                {
                  type: "text",
                  text: " For even more forced colors fine-tuning.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "All the good stuff is in that list, but check out the ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://github.com/tailwindlabs/tailwindcss/releases/tag/v3.4.0",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "release notes",
        },
        {
          type: "text",
          text: " for a couple more details that weren’t exciting enough to earn a spot in this post.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Upgrade your projects by installing the latest version of ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "tailwindcss",
        },
        {
          type: "text",
          text: " from npm:",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "bash",
      },
      content: [
        {
          type: "text",
          text: "$ npm install tailwindcss@latest",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Or try out all of the new features on ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://play.tailwindcss.com/",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Tailwind Play",
        },
        {
          type: "text",
          text: ", right in your browser.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/tailwindcss-v3-4#dynamic-viewport-units",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Dynamic viewport units",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "When the ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "vh",
        },
        {
          type: "text",
          text: " unit was added to browsers we all got so excited — finally a way to build full-height application layouts and stuff without drilling ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "height: 100%",
        },
        {
          type: "text",
          text: " through 17 layers of DOM! But mobile devices and their damn disappearing menu bars spoiled all the fun, effectively making the ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "vh",
        },
        {
          type: "text",
          text: " unit just a cruel reminder of a future that could’ve been so great.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Well we’ve got a new future now — ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "dvh",
        },
        {
          type: "text",
          text: ", ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "lvh",
        },
        {
          type: "text",
          text: ", and ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "svh",
        },
        {
          type: "text",
          text: " are designed to accommodate that disappearing browser chrome and Tailwind CSS v3.4 supports them out of the box:",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "Scroll up and down in the viewport to hide/show the browser UI",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "http://tailwindcss.com",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
          ],
          text: "tailwindcss.com",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "h-dvh",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "html",
      },
      content: [
        {
          type: "text",
          text: '<div class="h-dvh">\n  <!-- ... -->\n</div>',
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We’ve added the following new classes by default:",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "ClassCSS",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "h-svhheight: 100svhh-lvhheight: 100lvhh-dvhheight: 100dvhmin-h-svhmin-height: 100svhmin-h-lvhmin-height: 100lvhmin-h-dvhmin-height: 100dvhmax-h-svhmax-height: 100svhmax-h-lvhmax-height: 100lvhmax-h-dvhmax-height: 100dvh",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "If you need other values, you can always use arbitrary values too like ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "min-h-[75dvh]",
        },
        {
          type: "text",
          text: ".",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Browser support is ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://caniuse.com/viewport-unit-variants",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "pretty great",
        },
        {
          type: "text",
          text: " for these nowadays, so unless you need to support Safari 14 you can start using these right away.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/tailwindcss-v3-4#new-has-variant",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "New ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: ":has()",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/tailwindcss-v3-4#new-has-variant",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: " variant",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "The ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: ":has()",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://developer.mozilla.org/en-US/docs/Web/CSS/:has",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: " pseudo-class",
        },
        {
          type: "text",
          text: " is the most powerful thing that’s been added to CSS since flexbox. For the first time ever, you can style an element based on its ",
        },
        {
          type: "text",
          marks: [
            {
              type: "italic",
            },
          ],
          text: "children",
        },
        {
          type: "text",
          text: ", not just based on its parents. It even makes it possible to style based on subsequent siblings.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Here’s an example where the parent gets a colored ring if the radio button inside of it is checked:",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "Payment method",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Google PayApple PayCredit Card",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "html",
      },
      content: [
        {
          type: "text",
          text: '<label class="has-[:checked]:ring-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 ..">\n  <svg fill="currentColor">\n    <!-- ... -->\n  </svg>\n  Google Pay\n  <input type="radio" class="accent-indigo-500 ..." />\n</label>',
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "I feel like I’ve found a new use-case for ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: ":has()",
        },
        {
          type: "text",
          text: " every week while working on this new UI kit we’ve been building for the last few months, and it’s replaced a crazy amount of JavaScript in our code.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "For example, our text inputs are pretty complicated design-wise and require a little wrapper element to build. Without ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: ":has()",
        },
        {
          type: "text",
          text: ", we had no way of styling the wrapper based on things like the ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: ":disabled",
        },
        {
          type: "text",
          text: " state of the input, but now we can:",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "input.jsx",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "jsx",
      },
      content: [
        {
          type: "text",
          text: 'export function Input({ ... }) {\n  return (\n    <span className="has-[:disabled]:opacity-50 ...">\n      <input ... />\n    </span>\n  )\n}',
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "This one is pretty bleeding edge but as of literally today it’s now supported in the latest version of all major browsers. Give it a few weeks for any Firefox users to install today’s update and we should be able to go wild with it.",
        },
      ],
    },
    {
      type: "horizontalRule",
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/tailwindcss-v3-4#style-children-with-the-variant",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Style children with the ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "*",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/tailwindcss-v3-4#style-children-with-the-variant",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: " variant",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Here’s one people have wanted for literally ever — a way to style children from the parent using utility classes.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We’ve added a new ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "*",
        },
        {
          type: "text",
          text: " variant that targets direct children, letting you do stuff like this:",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "Categories",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Sales",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Marketing",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "SEO",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Analytics",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Design",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Strategy",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Security",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Growth",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Mobile",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "UX/UI",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "html",
      },
      content: [
        {
          type: "text",
          text: '<div>\n  <h2>Categories:<h2>\n  <ul class="*:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-2 *:py-0.5 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10 ...">\n    <li>Sales</li>\n    <li>Marketing</li>\n    <li>SEO</li>\n    <!-- ... -->\n  </ul>\n</div>',
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Generally I’d recommend just styling the children directly, but this can be useful when you don’t control those elements or need to make a conditional tweak because of the context the element is used in.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "It can be composed with other variants too, for instance ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "hover:*:underline",
        },
        {
          type: "text",
          text: " will style any child when the child is hovered.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Here’s a cool way we’re using that to conditionally add layout styles to different child elements in the new UI kit we’re working on:",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "JSX",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "jsx",
      },
      content: [
        {
          type: "text",
          text: 'function Field({ children }) {\n  return (\n    <div className="data-[slot=description]:*:mt-4 ...">\n      {children}\n    </div>\n  )\n}\n\nfunction Description({ children }) {\n  return (\n    <p data-slot="description" ...>{children}</p>\n  )\n}\n\nfunction Example() {\n  return (\n    <Field>\n      <Label>First name</Label>\n      <Input />\n      <Description>Please tell me you know your own name.</Description>\n    </Field>\n  )\n}',
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "See that crazy ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "data-[slot=description]:*:mt-4",
        },
        {
          type: "text",
          text: " class? It first targets all direct children (that’s the ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "*:",
        },
        {
          type: "text",
          text: " part), then filters them down to just items with a ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: 'data-slot="description"',
        },
        {
          type: "text",
          text: " attribute using ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "data-[slot=description]",
        },
        {
          type: "text",
          text: ".",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "This makes it easy to target only specific children, without having to drop all the way down to a raw arbitrary variant.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Looking forward to seeing all the horrible stuff everyone does to make me regret adding this feature.",
        },
      ],
    },
    {
      type: "horizontalRule",
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/tailwindcss-v3-4#new-size-utilities",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "New ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "size-*",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/tailwindcss-v3-4#new-size-utilities",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: " utilities",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "You’re sick of typing ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "h-5 w-5",
        },
        {
          type: "text",
          text: " every time you need to size an avatar, you know it and I know it.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "In Tailwind CSS v3.4 we’ve finally added a new ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "size-*",
        },
        {
          type: "text",
          text: " utility that sets width and height at the same time:",
        },
      ],
    },
    {
      type: "image",
      attrs: {
        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        alt: "",
        title: null,
        width: null,
        height: null,
      },
    },
    {
      type: "image",
      attrs: {
        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        alt: "",
        title: null,
        width: null,
        height: null,
      },
    },
    {
      type: "image",
      attrs: {
        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        alt: "",
        title: null,
        width: null,
        height: null,
      },
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "HTML",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "diff-html",
      },
      content: [
        {
          type: "text",
          text: '<div>\n  <img class="h-10 w-10" ...>\n  <img class="h-12 w-12" ...>\n  <img class="h-14 w-14" ...>\n  <img class="size-10" ...>\n  <img class="size-12" ...>\n  <img class="size-14" ...>\n</div>\n',
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We’ve wanted to add this forever but have always been hung up on the exact name — ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "size-*",
        },
        {
          type: "text",
          text: " felt like so much to type compared to ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "w-*",
        },
        {
          type: "text",
          text: " or ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "h-*",
        },
        {
          type: "text",
          text: " and ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "s-*",
        },
        {
          type: "text",
          text: " felt way too cryptic.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "After using it for a few weeks though I can say decisively that even with the longer name, it’s way better than separate width and height utilities. Super convenient, especially if you’re combining it with variants or using a complex arbitrary value.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/tailwindcss-v3-4#balanced-headlines-with-text-wrap-utilities",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Balanced headlines with ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "text-wrap",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/tailwindcss-v3-4#balanced-headlines-with-text-wrap-utilities",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: " utilities",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "How much time have you spent fiddling with ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "max-width",
        },
        {
          type: "text",
          text: " or inserting responsive line breaks to try and make those little section headings wrap nicely on your landing pages? Well now you can spend zero time on it, because the browser can do it for you with ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "text-wrap: balance",
        },
        {
          type: "text",
          text: ":",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 3,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "Beloved Manhattan soup stand closes",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 3,
      },
      content: [
        {
          type: "text",
          text: "New Yorkers are facing the winter chill with less warmth this year as the city's most revered soup stand unexpectedly shutters, following a series of events that have left the community puzzled.",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "html",
      },
      content: [
        {
          type: "text",
          text: '<article>\n  <h3 class="text-balance ...">Beloved Manhattan soup stand closes<h3>\n  <p>New Yorkers are facing the winter chill...</p>\n</article>',
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We’ve also added ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "text-pretty",
        },
        {
          type: "text",
          text: " which tries to avoid orphaned words at the end of paragraphs using ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "text-wrap: pretty",
        },
        {
          type: "text",
          text: ":",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 3,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "Beloved Manhattan soup stand closes",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 3,
      },
      content: [
        {
          type: "text",
          text: "New Yorkers are facing the winter chill with less warmth this year as the city's most revered soup stand unexpectedly shutters, following a series of events that have left the community puzzled.",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "html",
      },
      content: [
        {
          type: "text",
          text: '<article class="text-pretty ...">\n  <h3>Beloved Manhattan soup stand closes<h3>\n  <p>New Yorkers are facing the winter chill...</p>\n</article>',
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "The nice thing about these features is that even if someone visits your site with an older browser, they’ll just fallback to the regular wrapping behavior so it’s totally safe to start using these today.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/tailwindcss-v3-4#subgrid-support",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Subgrid support",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Subgrid is a fairly recent CSS feature that lets an element sort of inherit the grid columns or rows from its parent, make it possible to place its child elements in the parent grid.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "HTML",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "html",
      },
      content: [
        {
          type: "text",
          text: '<div class="grid grid-cols-4 gap-4">\n  <!-- ... -->\n  <div class="grid grid-cols-subgrid gap-4 col-span-3">\n      <div class="col-start-2">06</div>\n  </div>\n  <!-- ... -->\n</div>',
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We’re using subgrid in the new UI kit we’re working on for example in ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://twitter.com/adamwathan/status/1717576154008240615",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "dropdown menus",
        },
        {
          type: "text",
          text: ", so that if any item has an icon, all of the other items are indented to keep the text aligned:",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "HTML",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "html",
      },
      content: [
        {
          type: "text",
          text: '<div role="menu" class="grid grid-cols-[auto_1fr]">\n  <a href="#" class="grid-cols-subgrid col-span-2">\n    <svg class="mr-2">...</svg>\n    <span class="col-start-2">Account</span>\n  </a>\n  <a href="#" class="grid-cols-subgrid col-span-2">\n    <svg class="mr-2">...</svg>\n    <span class="col-start-2">Settings</span>\n  </a>\n  <a href="#" class="grid-cols-subgrid col-span-2">\n    <span class="col-start-2">Sign out</span>\n  </a>\n</div>',
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "When none of the items have an icon, the first column shrinks to 0px and the text is aligned all the way to left.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Check out the ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "MDN documentation on subgrid",
        },
        {
          type: "text",
          text: " for a full primer — it’s a bit of a tricky feature to wrap your head around at first, but once it clicks it’s a game-changer.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/tailwindcss-v3-4#extended-min-width-max-width-and-min-height-scales",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Extended min-width, max-width, and min-height scales",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We’ve finally extended the ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "min-width",
        },
        {
          type: "text",
          text: ", ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "max-width",
        },
        {
          type: "text",
          text: ", and ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "min-height",
        },
        {
          type: "text",
          text: " scales to include the full spacing scale, so classes like ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "min-w-12",
        },
        {
          type: "text",
          text: " are actually a real thing now:",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "HTML",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "html",
      },
      content: [
        {
          type: "text",
          text: '<div class="min-w-12">\n  <!-- ... -->\n</div>',
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We should’ve just done this for v3.0 but never really got around to it — I’m sorry and you’re welcome.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/tailwindcss-v3-4#extended-opacity-scale",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Extended opacity scale",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We’ve also extended the opacity scale to include every step of 5 out of the box:",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "HTML",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "html",
      },
      content: [
        {
          type: "text",
          text: '<div class="opacity-35">\n  <!-- ... -->\n</div>',
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Hopefully that means a few less arbitrary values in your markup. I’m coming for you next 2.5%.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/tailwindcss-v3-4#extended-grid-rows-scale",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Extended ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "grid-rows-*",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/tailwindcss-v3-4#extended-grid-rows-scale",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: " scale",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We’ve also bumped the baked-in number of grid rows from 6 to 12 because why not:",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "HTML",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "html",
      },
      content: [
        {
          type: "text",
          text: '<div class="grid grid-rows-9">\n  <!-- ... -->\n</div>',
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Maybe we’ll get even crazier and bump it to 16 in the next release.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/tailwindcss-v3-4#new-forced-colors-variant",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "New ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "forced-colors",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/tailwindcss-v3-4#new-forced-colors-variant",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: " variant",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Ever heard of ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "forced colors mode",
        },
        {
          type: "text",
          text: "? Your site probably looks pretty bad in it.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Well now you can’t blame us at least, because Tailwind CSS v3.4 includes a ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "forced-colors",
        },
        {
          type: "text",
          text: " variant for adjusting styles for forced colors mode:",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "HTML",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "html",
      },
      content: [
        {
          type: "text",
          text: '<form>\n  <input type="checkbox" class="appearance-none forced-colors:appearance-auto ...">\n</form>',
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "It’s really useful for fine-tuning totally custom controls, especially combined with arbitrary values and a working knowledge of ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://developer.mozilla.org/en-US/docs/Web/CSS/system-color",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "CSS system colors",
        },
        {
          type: "text",
          text: ".",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/tailwindcss-v3-4#new-forced-color-adjust-utilities",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "New ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "forced-color-adjust",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/tailwindcss-v3-4#new-forced-color-adjust-utilities",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: " utilities",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We’ve also added new ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "forced-color-adjust-auto",
        },
        {
          type: "text",
          text: " and ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "forces-color-adjust-none",
        },
        {
          type: "text",
          text: " utilities to control how forced colors mode affects your design:",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "HTML",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "html",
      },
      content: [
        {
          type: "text",
          text: '<fieldset>\n  <legend>Choose a color</legend>\n  <div class="forced-color-adjust-none ...">\n    <label>\n      <input class="sr-only" type="radio" name="color-choice" value="white" />\n      <span class="sr-only">White</span>\n      <span class="size-6 rounded-full bg-white"></span>\n    </label>\n    <label>\n      <input class="sr-only" type="radio" name="color-choice" value="gray" />\n      <span class="sr-only">Gray</span>\n      <span class="size-6 rounded-full bg-gray-300"></span>\n    </label>\n    <!-- ... -->\n  </div>\n</fieldset>',
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "These should be used pretty sparingly, but they can be useful when it’s critical that something is rendered in a specific color no matter what, like choosing the color of something someone is buying in an online store.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "To learn more about all this forced colors stuff, I recommend reading ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://polypane.app/blog/forced-colors-explained-a-practical-guide/",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "“Forced colors explained: A practical guide”",
        },
        {
          type: "text",
          text: " on the Polypane blog — by far the most useful post I’ve found on this topic.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "If you’ve been paying close attention, you might be wondering about ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://youtu.be/CLkxRnRQtDE?t=2146",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Oxide",
        },
        {
          type: "text",
          text: ", the engine improvements we previewed at ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/2023-07-18-tailwind-connect-2023-recap",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Tailwind Connect",
        },
        {
          type: "text",
          text: " this summer.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We’d originally slated those improvements for v3.4, but we have a few things still to iron out and so many of these other improvements had been piling up that we felt it made sense to get it all out the door instead of holding it back. The Oxide stuff is still coming, and will be the headlining improvement for the next Tailwind CSS release in the new year.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "In the mean time, dig in to Tailwind CSS v3.4 by updating to the latest version with npm:",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "bash",
      },
      content: [
        {
          type: "text",
          text: "$ npm install tailwindcss@latest",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "With ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: ":has()",
        },
        {
          type: "text",
          text: " and the new ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "*",
        },
        {
          type: "text",
          text: " variant, your HTML is about to get more out of control than ever.",
        },
      ],
    },
  ],
};

export const blog9 = {
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: {
        level: 1,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "Heroicons Micro: What are these, icons for ants?",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Date",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Monday, December 18, 2023",
        },
      ],
    },
    {
      type: "bulletList",
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Adam Wathan",
                },
              ],
            },
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://twitter.com/adamwathan",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-sky-500 hover:text-sky-600 dark:text-sky-400",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "@adamwathan",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We just released ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://heroicons.com/",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Heroicons v2.1",
        },
        {
          type: "text",
          text: " which includes a brand new micro style — a full set of almost three hundred 16×16 icons designed for tighter, higher density UIs.",
        },
      ],
    },
    {
      type: "image",
      attrs: {
        src: "https://tailwindcss.com/_next/static/media/card.64021a33.jpg",
        alt: "Heroicons Micro",
        title: null,
        width: null,
        height: null,
      },
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We’ve wanted to do a set this size for a long time, but it wasn’t until we started working on ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://twitter.com/steveschoger/status/1725246591269769363",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "a new React UI kit project",
        },
        {
          type: "text",
          text: " earlier this year that we finally needed them badly enough to bite the bullet and design them.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "In Catalyst (our new UI kit), we’ve tried to really thread the needle in terms of giving things enough room to breathe but also keeping things dense enough that the applications you build with it actually feel productive to use.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We’re using lots of 14px text which looks great in the UI, but when we tried to incorporate our existing 20×20 icons, they felt just a tiny bit too big and unbalanced.",
        },
      ],
    },
    {
      type: "image",
      attrs: {
        src: "https://tailwindcss.com/_next/static/media/mini-vs-micro-dropdown.bb98f81f.jpg",
        alt: "Heroicons Mini compared to Heroicons Micro used in a dropdown",
        title: null,
        width: null,
        height: null,
      },
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Most people would have probably just scaled the icons down and moved on, but we’re not most people, for better or for worse.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Icons always turn out a lot sharper when you design them for the exact size they’re going to be used, so we began the process of redrawing every icon from scratch, carefully trimming down the amount of detail on an icon-by-icon basis to make sure they render nice and crisp at their intended size.",
        },
      ],
    },
    {
      type: "image",
      attrs: {
        src: "https://tailwindcss.com/_next/static/media/mini-vs-micro-details.f8ec2dce.jpg",
        alt: "Examples of details adjusted for Heroicons Micro",
        title: null,
        width: null,
        height: null,
      },
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "About a month later we had a brand new set of 288 icons, meticulously crafted for higher density interfaces like what we’ve been working on with Catalyst.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "You can check out all of the new icons on the ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://heroicons.com/",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Heroicons website",
        },
        {
          type: "text",
          text: ", start designing with them using our official ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://www.figma.com/community/file/1143911270904274171",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Heroicons Figma library",
        },
        {
          type: "text",
          text: ", and add them to your projects with our ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://github.com/tailwindlabs/heroicons",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "React and Vue libraries",
        },
        {
          type: "text",
          text: ".",
        },
      ],
    },
  ],
};

export const blog10 = {
  type: "doc",
  content: [
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Monday, August 7, 2023",
        },
      ],
    },
    {
      type: "bulletList",
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Adam Wathan",
                },
              ],
            },
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://twitter.com/adamwathan",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class:
                          "text-sky-500 hover:text-sky-600 dark:text-sky-400",
                      },
                    },
                    {
                      type: "bold",
                    },
                  ],
                  text: "@adamwathan",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We just released ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindui.com/templates/studio",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Studio",
        },
        {
          type: "text",
          text: " — a beautiful new agency website template we’ve been working on for the last couple of months for Tailwind UI.",
        },
      ],
    },
    {
      type: "image",
      attrs: {
        src: "https://tailwindcss.com/_next/static/media/template.37676ea1.png",
        alt: "Learn about the Studio template",
        title: null,
        width: null,
        height: null,
      },
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We built it with Next.js, MDX, and of course Tailwind CSS, and it’s the first template we’ve published using the new Next.js ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://nextjs.org/docs/app",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "App Router",
        },
        {
          type: "text",
          text: ".",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Designing an agency template is an interesting project, because creative agencies commonly use their own website to show off some really flashy, bespoke ideas, and using a template just kind of feels strange when the goal is to show what your own company is capable of.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "So we tried to approach this one with two goals in mind to actually make it useful to people:",
        },
      ],
    },
    {
      type: "orderedList",
      attrs: {
        start: 1,
      },
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Teach people how to do some of the cool stuff you see on flash agency sites",
                },
                {
                  type: "text",
                  text: " — I’ve always believed our templates are just as (if not more) valuable as an educational resource than as simply templates, so we wanted to use this template as an opportunity to show off how we’d build a lot of the cool interactive and animated details you see on these sorts of sites.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Design it for agencies that don’t sell design",
                },
                {
                  type: "text",
                  text: " — there are a lot of agencies out there who just focus on engineering work, and a lot of the time those companies struggle to stand out design-wise. We tried to design this template in a way that it didn’t depend on tons of screenshots of design work and stuff to look good, so that an agency that focuses on code could use it as a starting point for their own site.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "I think what we came up with nailed these two goals and I’m really proud of how it all turned out.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Check out the ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://studio.tailwindui.com/",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "live preview",
        },
        {
          type: "text",
          text: " as always for the full experience — there are tons of cool details in this one that you have to see in the browser to really appreciate.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/2023-08-07-meet-studio-our-new-agency-template#delightfully-animated",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Delightfully animated",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "One of the unspoken rules of agency websites is that they’ve gotta be flashy. We didn’t go full replace-the-mouse-cursor or render-the-entire-site-with-WebGL but we did look for opportunities to tastefully introduce animations and interactivity wherever we could.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "For instance, we built a light declarative component-based API around some features of ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://www.framer.com/motion/",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Framer Motion",
        },
        {
          type: "text",
          text: " to make it easy to do scroll-triggered entrance animations:",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "The authoring experience for these types of animations turned out really nice — just wrap the stuff you want to fade in with a ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "FadeIn",
        },
        {
          type: "text",
          text: " or ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "FadeInStagger",
        },
        {
          type: "text",
          text: " component and you’re in business:",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "jsx",
      },
      content: [
        {
          type: "text",
          text: 'function Clients() {\n  return (\n    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">\n      <Container>\n        <FadeIn className="flex items-center gap-x-8">\n          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">\n            We’ve worked with hundreds of amazing people\n          </h2>\n          <div className="h-px flex-auto bg-neutral-800" />\n        </FadeIn>\n        <FadeInStagger faster>\n          <ul\n            role="list"\n            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"\n          >\n            {clients.map(([client, logo]) => (\n              <li key={client}>\n                <FadeIn>\n                  <Image src={logo} alt={client} unoptimized />\n                </FadeIn>\n              </li>\n            ))}\n          </ul>\n        </FadeInStagger>\n      </Container>\n    </div>\n  )\n}',
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We also added this nice little animation to the logo where the mark is filled with a solid color on hover:",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "This little detail looks small but interestingly you can’t really do it without client-side navigation, because the animation would re-run when clicking the logo to go back to the homepage. Using a framework like Next.js, we’re able to keep the logo filled in while hovering, even across URL changes, which feels a lot nicer.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "The menu drawer animation turned out really nice as well, pushing the whole page down when it opens:",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "If you look closely, the logo and button don’t just naively change color either — it’s actually driven precisely by the position of the sheet that’s sliding down, and the logo is actually partially white and partially black at the same time when the edge of the sheet is intersecting with it.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Another detail I really love is this interaction we came up with for the images on the case study pages:",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We wanted the whole site to feel black and white, but showing black and white images all of the time didn’t feel right. So we came up with this treatment where the image starts off black and white, and the saturation animates back in as the image gets close to the center of the screen when scrolling. We also show the full color image on hover.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We were also careful to try and implement all of these animations in a way that’s mindful of people with vestibular motion disorders and are sensitive to these types of big animations. Using Framer Motion’s ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "useReducedMotion",
        },
        {
          type: "text",
          text: " hook and the ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "motion-safe",
        },
        {
          type: "text",
          text: " variant in Tailwind, we do things like conditionally disable the navigation menu animation, and limit the scroll-driven entrance animations to opacity only so things aren’t moving on the screen.",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindcss.com/blog/2023-08-07-meet-studio-our-new-agency-template#developer-centric-case-study-and-blog-workflow",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "group relative border-none lg:-ml-2 lg:pl-2",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Developer-centric case study and blog workflow",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Studio includes support for both ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://studio.tailwindui.com/work/family-fund",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "case studies",
        },
        {
          type: "text",
          text: " and ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://studio.tailwindui.com/blog/future-of-web-development",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "blog posts",
        },
        {
          type: "text",
          text: ", and as you might have guessed if you’ve played with any of our other templates, we used this an excuse to integrate ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://mdxjs.com/",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "MDX",
        },
        {
          type: "text",
          text: " into the project.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Here’s an example of what a basic case study looks like — authored mostly in markdown with some common metadata and support for custom components mixed in to the content:",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "jsx",
      },
      content: [
        {
          type: "text",
          text: "import logo from '@/images/clients/phobia/logomark-dark.svg'\nimport imageHero from './hero.jpg'\nimport imageJennyWilson from './jenny-wilson.jpeg'\n\nexport const caseStudy = {\n  client: 'Phobia',\n  title: 'Overcome your fears, find your match',\n  description:\n    'Find love in the face of fear — Phobia is a dating app that matches users based on their mutual phobias so they can be scared together.',\n  summary: [\n    'Find love in the face of fear — Phobia is a dating app that matches users based on their mutual phobias so they can be scared together.',\n    'We worked with Phobia to develop a new onboarding flow. A user is shown pictures of common phobias and we use the microphone to detect which ones make them scream, feeding the results into the matching algorithm.',\n  ],\n  logo,\n  image: { src: imageHero },\n  date: '2022-06',\n  service: 'App development',\n  testimonial: {\n    author: { name: 'Jenny Wilson', role: 'CPO of Phobia' },\n    content:\n      'The team at Studio went above and beyond with our onboarding, even finding a way to access the user’s microphone without triggering one of those annoying permission dialogs.',\n  },\n}\n\nexport const metadata = {\n  title: `${caseStudy.client} Case Study`,\n  description: caseStudy.description,\n}\n\n## Overview\n\nNoticing incredibly high churn, the team at Phobia came to the conclusion that, instead of having a\nfundamentally flawed business idea, they needed to improve their onboarding process.\n\nPreviously users selected their phobias manually but this led to some users selecting things they\nweren’t actually afraid of to increase their matches.\n\nTo combat this, we developed a system that displays a slideshow of common phobias during\nonboarding. We then use malware to surreptitiously access their microphone and detect when they\nhave audible reactions. We measure the pitch, volume and duration of their screams and feed that\ninformation to the matching algorithm.\n\nThe next phase is a VR version of the onboarding flow where users are subjected to a series of\nscenarios that will determine their fears. We are currently developing the first scenario, working\ntitle: “Jumping out of a plane full of spiders”.\n\n## What we did\n\n<TagList>\n  <TagListItem>Android</TagListItem>\n  <TagListItem>iOS</TagListItem>\n  <TagListItem>Malware</TagListItem>\n  <TagListItem>VR</TagListItem>\n</TagList>\n\n<Blockquote\n  author={{ name: 'Jenny Wilson', role: 'CPO of Phobia' }}\n  image={{ src: imageJennyWilson }}\n>\n  The team at Studio went above and beyond with our onboarding, even finding a\n  way to access the user’s microphone without triggering one of those annoying\n  permission dialogs.\n</Blockquote>\n\n<StatList>\n  <StatListItem value=\"20%\" label=\"Churn rate\" />\n  <StatListItem value=\"5x\" label=\"Uninstalls\" />\n  <StatListItem value=\"2.3\" label=\"App store rating\" />\n  <StatListItem value=\"8\" label=\"Pending lawsuits\" />\n</StatList>",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "All of the typography styles for this template are totally custom and we took a bit of a different approach this time than we have in the past — instead of writing a bunch of complex CSS to avoid our typography styles clashing with any custom components in the MDX, we created a little remark plugin called ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "remark-rehype-wrap",
        },
        {
          type: "text",
          text: " that makes it possible to wrap chunks of Markdown content with a wrapper element.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "This way, we could wrap anything that was vanilla Markdown content with a ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "typography",
        },
        {
          type: "text",
          text: " class, but make sure any custom components in the document were simply ",
        },
        {
          type: "text",
          marks: [
            {
              type: "italic",
            },
          ],
          text: "not",
        },
        {
          type: "text",
          text: " wrapped, rather than try to craft the CSS in such a way that it ignores those parts of the tree.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Both approaches totally work but it’s always fun to try new ideas and see what you learn. I’m curious to see what a solution based on the new ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://ishadeed.com/article/css-container-style-queries/",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "style queries",
        },
        {
          type: "text",
          text: " feature coming to CSS might look like in the future too!",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "So that’s ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindui.com/templates/studio",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Studio",
        },
        {
          type: "text",
          text: "! Pull it down, tear it apart, and see if you learn a couple of new tricks.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Like all of our templates, it’s included with a one-time purchase ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tailwindui.com/all-access",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
            {
              type: "bold",
            },
          ],
          text: "Tailwind UI all-access",
        },
        {
          type: "text",
          text: " license, which is the best way to support our work on Tailwind CSS and make it possible for us to keep building awesome stuff for years to come.",
        },
      ],
    },
  ],
};
