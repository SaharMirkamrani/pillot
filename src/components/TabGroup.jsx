import React from 'react';
import { TabGroup } from '@statikly/funk';
import DashContainer from './DashContainer';

const Tabs = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <TabGroup numTabs={6} direction={TabGroup.direction.HORIZONTAL}>
        <TabGroup.TabList className="mx-auto text-center">
          <TabGroup.Tab
            index={0}
            className="h-12 px-6 focus:outline-none border-b-4 text-sm"
            activeClassName="text-darkYellow text-xl border-gray-400"
            inactiveClassName="text-gray-400 hover:text-gray-600 hover:border-gray-300 transition duration-200"
          >
            لیست پرداخت ها
          </TabGroup.Tab>
          <TabGroup.Tab
            index={1}
            className="h-12 px-6 focus:outline-none border-b-4 text-sm"
            activeClassName="text-darkYellow text-xl border-gray-400"
            inactiveClassName="text-gray-400 hover:text-gray-600 hover:border-gray-300 transition duration-200"
          >
            لیست آگهی های نشان شده
          </TabGroup.Tab>
          <TabGroup.Tab
            index={2}
            className="h-12 px-6 focus:outline-none border-b-4 text-sm"
            activeClassName="text-darkYellow text-xl border-gray-400"
            inactiveClassName="text-gray-400 hover:text-gray-600 hover:border-gray-300 transition duration-200"
          >
            لیست آگهی های منتشر شده
          </TabGroup.Tab>
          <TabGroup.Tab
            index={3}
            className="h-12 px-6 focus:outline-none border-b-4 text-sm"
            activeClassName="text-darkYellow text-xl border-gray-400"
            inactiveClassName="text-gray-400 hover:text-gray-600 hover:border-gray-300 transition duration-200"
          >
            لیست آدرس ها
          </TabGroup.Tab>
          <TabGroup.Tab
            index={4}
            className="h-12 px-6 focus:outline-none border-b-4 text-sm"
            activeClassName="text-darkYellow text-xl border-gray-400"
            inactiveClassName="text-gray-400 hover:text-gray-600 hover:border-gray-300 transition duration-200"
          >
            لیست مناطق مورد نظر
          </TabGroup.Tab>
          <TabGroup.Tab
            index={5}
            className="h-12 px-6 focus:outline-none border-b-4 text-sm"
            activeClassName="text-darkYellow text-xl border-gray-400"
            inactiveClassName="text-gray-400 hover:text-gray-600 hover:border-gray-300 transition duration-200"
          >
            تنظیمات ربات
          </TabGroup.Tab>
        </TabGroup.TabList>
        <TabGroup.TabPanel
          index={0}
          className="p-2 transition-all transform h-max relative"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="opacity-0 -translate-x-2"
        >
          <DashContainer />
        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={1}
          className="p-2 transition-all transform h-64 h-screen"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
          <label className="font-semibold mb-1" htmlFor="input">
            Input
          </label>
          <input id="input" type="text" className="border border-gray-400 px-8 h-12" placeholder="Focus me!" />
        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={2}
          className="p-2 transition-all transform h-64 h-screen"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
          Content 3
        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={3}
          className="p-2 transition-all transform h-64 h-screen"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
          <label className="font-semibold mb-1" htmlFor="input">
            Input
          </label>
          <input id="input" type="text" className="border border-gray-400 px-8 h-12" placeholder="Focus me!" />
        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={4}
          className="p-2 transition-all transform h-64 h-screen"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
          <label className="font-semibold mb-1" htmlFor="input">
            Input
          </label>
          <input id="input" type="text" className="border border-gray-400 px-8 h-12" placeholder="Focus me!" />
        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={5}
          className="p-2 transition-all transform h-64 h-screen"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
          <label className="font-semibold mb-1" htmlFor="input">
            Input
          </label>
          <input id="input" type="text" className="border border-gray-400 px-8 h-12" placeholder="Focus me!" />
        </TabGroup.TabPanel>
      </TabGroup>
    </div>
  );
};

export default Tabs;
