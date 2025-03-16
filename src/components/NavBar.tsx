import React, { useState } from "react";
import { XIcon } from "@heroicons/react/solid";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const TSIcon = require("../assets/icons/TSIcon.png");

interface TabType {
  id: string;
  name: string;
  icon: string;
}

const defaultTabs: TabType[] = [
  { id: "home", name: "Home.ts", icon: TSIcon },
  { id: "about", name: "About.ts", icon: TSIcon },
  { id: "projects", name: "Projects.ts", icon: TSIcon },
  { id: "achievements", name: "Achievements.ts", icon: TSIcon },
  { id: "resume", name: "Resume.ts", icon: TSIcon },
  { id: "contact", name: "Contact.ts", icon: TSIcon }
];

interface NavBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  closedTabs: string[];
  setClosedTabs: (tabs: string[]) => void;
}

const NavBar: React.FC<NavBarProps> = ({
  activeTab,
  setActiveTab,
  closedTabs,
  setClosedTabs,
}) => {
  const [tabs, setTabs] = useState<TabType[]>(defaultTabs);
  const [isScrolling, setIsScrolling] = useState(false);
  const openTabs = tabs.filter((tab) => !closedTabs.includes(tab.id));

  const handleCloseTab = (tabId: string) => {
    setClosedTabs([...closedTabs, tabId]);
    if (activeTab === tabId) {
      const remainingTabs = tabs.filter(
        (tab) => !closedTabs.includes(tab.id) && tab.id !== tabId
      );
      if (remainingTabs.length > 0) {
        setActiveTab(remainingTabs[0].id);
      }
    }
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(tabs);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTabs(items);
    setIsScrolling(false);
  };

  const onDragStart = () => {
    setIsScrolling(true);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
      <Droppable droppableId="tabs" direction="horizontal">
        {(provided) => (
          <div
            className="flex h-full overflow-x-auto"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#4B5563 transparent'
            }}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {openTabs.map((tab, index) => (
              <Draggable key={tab.id} draggableId={tab.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`h-full flex items-center px-3 sm:px-4 border-r border-[#1e1e1e] cursor-pointer select-none whitespace-nowrap ${
                      activeTab === tab.id
                        ? "bg-[#1e1e1e] text-yellow_vs"
                        : "text-[#817d7d] hover:bg-[#2a2a2a]"
                    } ${isScrolling ? "transition-none" : "transition-colors"}`}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      ...provided.draggableProps.style,
                      backgroundColor: snapshot.isDragging ? "#2a2a2a" : undefined,
                    }}
                  >
                    <img src={TSIcon} alt="TS Icon" className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                    <p className="text-xs sm:text-sm">{tab.name}</p>
                    <button
                      className="ml-1 sm:ml-2 p-1 rounded-md hover:bg-[#333333] focus:outline-none"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCloseTab(tab.id);
                      }}
                    >
                      <XIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                    </button>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default NavBar;
