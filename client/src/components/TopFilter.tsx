import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg';
import React, { useState } from 'react';
import { BiSortUp } from 'react-icons/bi';
// import { useSelector } from 'react-redux';
// import { RootState } from 'store';
import { TaskFilterModal } from './modals/TaskFilterModal';
import { ViewOptionMenu } from './menus/ViewOptionMenu';

interface Props {
  /* Top title */
  title: string;
  onOpenMenu?: () => void;
}

export const TopFilter = ({ title, onOpenMenu }: Props) => {
  const [showFilter, setShowFilter] = useState(false);
  const [showViewOption, setShowViewOption] = useState(false);

  // const issues = useSelector((state: RootState) => state.issues);
  // const totalIssues = issues.backlog.length + issues.todo.length
  //     + issues.done.length + issues.inProgress.length + issues.canceled.length;

  return (
    <>
      <div className='flex justify-between flex-shrink-0 pl-2 pr-6 border-b border-gray-200 h-14 lg:pl-9'>
        {/* left section */}
        <div className='flex items-center'>
          <button
            className='flex-shrink-0 h-full px-5 focus:outline-none lg:hidden'
            onClick={onOpenMenu}
          ><MenuIcon className='w-3.5 text-gray-500 hover:text-gray-800' /></button>

          <div className='p-1 font-semibold cursor-default hover:bg-gray-100'>{title}</div>
          {/* <span>{totalIssues}</span> */}
          <span>30</span>
          <button
            className='px-1 py-0.5 ml-3 border border-gray-300 border-dashed rounded text-gray-500 hover:border-gray-400 focus:outline-none hover:text-gray-800'
            onClick={() => setShowFilter(!showFilter)}
          >+ Filter</button>
        </div>

        {/* right section */}
        <div className='flex items-center'>
          <div className='p-2 rounded hover:bg-gray-100'
            onClick={() => setShowViewOption(true)}
          >
            <BiSortUp size={14} />
          </div>
        </div>
      </div>
      <ViewOptionMenu isOpen={showViewOption} onDismiss={() => setShowViewOption(false)} />
      <TaskFilterModal isOpen={showFilter} onDismiss={() => setShowFilter(false)} />
    </>
  );
};
