import React from 'react'
import { Subtext } from "@components/Subtext";
import { Subheader } from "@components/Subheader";
import FirstRowImage from "@assets/images/features_1.png";
import SecondRowImage from "@assets/images/features_2.png";
import { List } from '@components/List/List';
import { ListItem } from '@components/List/ListItem';
import checkmarkIcon from "@assets/images/Checkmark.svg";

export const Features = () => {
  return (
    <div className="bg-gray-50 py-24">

      {/* First row  */}
      <div className="flex container mx-auto items-center mb-20 gap-x-16">
        <div className="md:flex-1">
          <div class="mb-8">
                <Subheader>
                  Work with tools you already use
                </Subheader>
                <Subtext className="mt-4">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.</Subtext>
          </div>
          <List
            className="pt-8 border-t border-gray-200 pl-6" 
            bulletpoint={checkmarkIcon}
          >
            <ListItem>Continuous integration and deployment</ListItem>
            <ListItem>Development workflow</ListItem>
            <ListItem>Knowledge management</ListItem>
          </List>
          <Subtext className="mt-6 leading-normal">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</Subtext>
        </div>

        <div className="hidden md:block p-2.5 flex-1 h-full">
          <img src={FirstRowImage} alt="" />
        </div>
      </div>

    {/* Second row */}
      
    <div className="flex container mx-auto items-center gap-x-16">

        <div className="hidden md:block p-2.5 flex-1 h-full">
          <img src={SecondRowImage} alt="" />
        </div>

        <div className="md:flex-1">
          <div class="mb-8">
                <Subheader>
                  We invest in the world’s potential
                </Subheader>
                <Subtext className="mt-4">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.</Subtext>
          </div>
          <List
            className="pt-8 border-t border-gray-200 pl-6" 
            bulletpoint={checkmarkIcon}
          >
            <ListItem>Dynamic reports and dashboards</ListItem>
            <ListItem>Templates for everyone</ListItem>
            <ListItem>Development workflow</ListItem>
            <ListItem>Limitless business automation</ListItem>
            <ListItem>Knowledge management</ListItem>
          </List>
        </div>
      </div>
    </div>
  )
}
