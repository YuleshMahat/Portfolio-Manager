"use client";

import React, { useEffect, useState } from "react";
import DashboardLayout from "@/app/dashboard/layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useAppSelector } from "@/hooks/reduxHooks";
import { handleGetSkillsAction } from "@/features/skills/skillsAction";
import SkillCard from "@/components/SkillCard";

const page = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const { user } = useAppSelector((state) => state.userStore);

  useEffect(() => {
    const getSkills = async () => {
      const result = await handleGetSkillsAction(user._id);
      if (result.status === "success") {
        setSkills(result.data.skills);
      }
    };
    getSkills();
  }, []);

  return (
    <DashboardLayout>
      <Container>
        <h1 className="mb-2">Manage Your Skills Displayed on Your portolio</h1>
        <Row className="g-4 flex-grow-1">
          {skills?.map((skill, index) => (
            <Col
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={index}
              className="text-white"
            >
              <SkillCard skill={skill} />
            </Col>
          ))}
        </Row>
      </Container>
    </DashboardLayout>
  );
};

export default page;
