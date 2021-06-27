import React from 'react';
import { TabGroup } from '@statikly/funk';
import DashContainer from './DashContainer';
import DashCardBookmark from './DashCardBookmark';
import DashAddressCards from './DashAddressCard';

const Tabs = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <TabGroup numTabs={6} direction={TabGroup.direction.VERTICAL}>
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
        <TabGroup.TabPanel index={0} className="py-2 h-max w-full" activeClassName="block" inactiveClassName="hidden">
          <DashContainer />
        </TabGroup.TabPanel>
        <TabGroup.TabPanel index={1} className="py-2 h-max" activeClassName="block" inactiveClassName="hidden">
          <DashCardBookmark />
        </TabGroup.TabPanel>
        <TabGroup.TabPanel index={2} className="py-2 h-max" activeClassName="block" inactiveClassName="hidden">
          <DashCardBookmark />
        </TabGroup.TabPanel>
        <TabGroup.TabPanel index={3} className="py-2 h-max w-full" activeClassName="block" inactiveClassName="hidden">
          <DashAddressCards />
        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={4}
          className="py-2 h-max"
          activeClassName="block"
          inactiveClassName="hidden"
        ></TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={5}
          className="py-2 h-max"
          activeClassName="block"
          inactiveClassName="hidden"
        ></TabGroup.TabPanel>
      </TabGroup>
    </div>
  );
};

export default Tabs;
