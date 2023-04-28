import React from 'react'
import { Subtext } from "@components/Subtext";
import { Subheader } from "@components/Subheader";
import FirstRowImage from "@assets/images/features_1.png";
import SecondRowImage from "@assets/images/features_2.png";
import { List } from '@components/List';
import checkmarkIcon from "@assets/images/Checkmark.svg";

export const Features = () => {
  return (
    <div className="bg-gray-50 py-24">

      {/* First row  */}
      <div className="container-padded mx-auto flex items-center mb-20 gap-x-16">
        <div className="md:flex-1">
          <div className="mb-8">
                <Subheader>
                  Work with tools you already use
                </Subheader>
                <Subtext className="mt-4">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.</Subtext>
          </div>
          <List
            className="pt-8 border-t border-gray-200" 
            bulletpoint={checkmarkIcon}
          >
            <List.Item>Continuous integration and deployment</List.Item>
            <List.Item>Development workflow</List.Item>
            <List.Item>Knowledge management</List.Item>
          </List>
          <Subtext className="mt-6 leading-normal">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</Subtext>
        </div>

        <div className="hidden md:block p-2.5 pr-0 flex-1 h-full">
          <img src={FirstRowImage} alt="" />
        </div>
      </div>

    {/* Second row */}
      
    <div className="flex container-padded mx-auto items-center gap-x-16">

        <div className="hidden md:block box-border pl-0 flex-1 h-full">
          <img src={SecondRowImage} alt="" />
        </div>

        <div className="md:flex-1">
          <div className="mb-8">
                <Subheader>
                  We invest in the world’s potential
                </Subheader>
                <Subtext className="mt-4">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.</Subtext>
          </div>
          <List
            className="pt-8 border-t border-gray-200" 
            bulletpoint={checkmarkIcon}
          >
            <List.Item>Dynamic reports and dashboards</List.Item>
            <List.Item>Templates for everyone</List.Item>
            <List.Item>Development workflow</List.Item>
            <List.Item>Limitless business automation</List.Item>
            <List.Item>Knowledge management</List.Item>
          </List>
        </div>
      </div>
    </div>
  )
}
