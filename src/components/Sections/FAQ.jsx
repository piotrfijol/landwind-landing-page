import React from 'react';
import { Subheader } from "../Subheader";
import { Accordion } from "flowbite-react";

export const FAQ = () => {
  return (
    <div className="bg-white pb-24">
        <div className="container-padded mx-auto">
            <Subheader className="mb-8 text-center">Frequently asked questions</Subheader>
            <Accordion 
                className="max-w-screen-md mx-auto"
                flush={true}
            >
                <Accordion.Panel>
                    <Accordion.Title>
                    Can I use FlowBite in open-source projects?
                    </Accordion.Title>
                    <Accordion.Content>
                    <p className="mb-1.5 text-gray-500 dark:text-gray-400">
                        Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to FlowBite itself.
                    </p>
                    <p className="mb-1.5 text-gray-500 dark:text-gray-400">
                        With that being said, feel free to use this design kit for your open-source projects.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                        Find out more information by&nbsp;
                        <a
                        href="https://flowbite.com/docs/getting-started/introduction/"
                        className="text-purple-600 hover:underline"
                        >
                            reading the license.
                        </a>
                    </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                    Where can I access my download files?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-1.5 text-gray-500 dark:text-gray-400">
                            Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to FlowBite itself.
                        </p>
                        <p className="mb-1.5 text-gray-500 dark:text-gray-400">
                            With that being said, feel free to use this design kit for your open-source projects.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Find out more information by&nbsp;
                            <a
                            href="https://flowbite.com/docs/getting-started/introduction/"
                            className="text-purple-600 hover:underline"
                            >
                                reading the license.
                            </a>
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                    Can I use FlowBite for commercial purposes?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-1.5 text-gray-500 dark:text-gray-400">
                            Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to FlowBite itself.
                        </p>
                        <p className="mb-1.5 text-gray-500 dark:text-gray-400">
                            With that being said, feel free to use this design kit for your open-source projects.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Find out more information by&nbsp;
                            <a
                            href="https://flowbite.com/docs/getting-started/introduction/"
                            className="text-purple-600 hover:underline"
                            >
                                reading the license.
                            </a>
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                    What about browser support?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-1.5 text-gray-500 dark:text-gray-400">
                            Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to FlowBite itself.
                        </p>
                        <p className="mb-1.5 text-gray-500 dark:text-gray-400">
                            With that being said, feel free to use this design kit for your open-source projects.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Find out more information by&nbsp;
                            <a
                            href="https://flowbite.com/docs/getting-started/introduction/"
                            className="text-purple-600 hover:underline"
                            >
                                reading the license.
                            </a>
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                </Accordion>
        </div>
        
    </div>
  )
}
