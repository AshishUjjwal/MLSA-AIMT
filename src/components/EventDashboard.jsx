import React, { useState, useEffect } from "react";
import EventItem from "./EventItem";
import styles from "./EventDashboard.module.css";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";

const events = [
  {
    date: "20nd Jul - 2024",
    status: "UpComing",
    title: "Git and GitHub",
    description: "Topics to be covered in the Workshop: What are Git and GitHub? Structure of Tutorial Hands-on Practice using Git and GitHub.",
    icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    connectorIcon: <FastfoodIcon />
  },
  {
    date: "20nd Jul - 2024",
    status: "UpComing",
    title: "Git and GitHub",
    description:
      "Topics to be covered in the Workshop: What are Git and GitHub? Structure of Tutorial Hands-on Practice using Git and GitHub.",
    icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    connectorIcon: <LaptopMacIcon />
  },
  {
    date: "Feb 8th - 2024",
    status: "Completed",
    title: "Azure Skill Challenge",
    description:
      "Embark on a journey of innovation with the Power Platform App Maker Challenge! Unleash your creativity and technical prowess as you design.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
    connectorIcon: <RepeatIcon />
  },
  {
    date: "14th Jan - 2024",
    status: "Completed",
    title: "Git and GitHub",
    description:
      "Topics to be covered in the Workshop: What are Git and GitHub? Structure of Tutorial Hands-on Practice using Git and GitHub.",
    icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    connectorIcon: <HotelIcon />
  },
];

const EventDashboard = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set the initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className={styles.eventdashboard}>
        <span className={styles.Title}>Events Dashboard</span>
      </div>
      <div className={styles.eventdashboard}>
        {/* <div className={styles.timeline}></div> */}
        {!isMobile ? (
          <Timeline position="alternate">
            {events.map((event, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary" variant="outlined">
                    {event.connectorIcon}
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <EventItem
                    event={event}
                    position={index % 2 === 0 ? "left" : "left"}
                  />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        ) : (
          <div>
            {events.map((event, index) => (
              <div key={index} className={styles.mobileEventItem}>
                <EventItem event={event} position="center" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDashboard;
