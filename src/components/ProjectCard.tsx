"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Badge, Card, Button } from "react-bootstrap";
import { Github, ExternalLink, Copy, Check, Edit3 } from "lucide-react";
import EditProjectModal from "./EditProjectModal";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { fetchProjectsAction } from "@/features/projects/projectsAction";

interface ProjectCardProps {
  _id: string;
  name: string;
  image: string;
  skills: string[];
  github: string;
  live: string;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const [copiedGit, setCopiedGit] = useState(false);
  const [copiedLive, setCopiedLive] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.userStore);

  const copyToClipboard = (text: string, type: "git" | "live") => {
    navigator.clipboard.writeText(text);
    if (type === "git") {
      setCopiedGit(true);
      setTimeout(() => setCopiedGit(false), 2000);
    } else {
      setCopiedLive(true);
      setTimeout(() => setCopiedLive(false), 2000);
    }
  };

  return (
    <>
      <Card className="h-100 shadow-sm border-0 overflow-hidden transition-all hover:shadow-lg">
        <div className="position-relative">
          <Image
            src={props.image || "/fallback-project.jpg"}
            alt={props.name}
            width={400}
            height={200}
            className="card-img-top"
            style={{ height: "200px", objectFit: "cover" }}
          />
          <div className="position-absolute top-0 end-0 m-2">
            <Badge bg="dark">Project</Badge>
          </div>
        </div>

        <Card.Body className="d-flex flex-column">
          <Card.Title className="fw-bold fs-5">{props.name}</Card.Title>

          {/* Skills */}
          <div className="d-flex flex-wrap gap-2 my-3">
            {props.skills.map((skill) => (
              <Badge key={skill} bg="secondary" pill>
                {skill}
              </Badge>
            ))}
          </div>

          {/* GitHub */}
          <div className="mt-3">
            <div className="d-flex align-items-center gap-2 mb-2">
              <Github size={18} className="text-muted" />
              <span className="text-muted small">GitHub</span>
            </div>
            <div className="bg-light border rounded p-2 d-flex align-items-center justify-content-between">
              <code
                className="text-truncate small me-2"
                style={{ maxWidth: "220px" }}
              >
                {props.github || "Not provided"}
              </code>
              {props.github && (
                <button
                  onClick={() => copyToClipboard(props.github, "git")}
                  className="btn btn-sm btn-outline-secondary p-1"
                  title="Copy GitHub URL"
                >
                  {copiedGit ? (
                    <Check size={16} className="text-success" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Live Demo */}
          <div className="mt-3">
            <div className="d-flex align-items-center gap-2 mb-2">
              <ExternalLink size={18} className="text-muted" />
              <span className="text-muted small">Live Demo</span>
            </div>
            <div className="bg-light border rounded p-2 d-flex align-items-center justify-content-between">
              <code
                className="text-truncate small me-2"
                style={{ maxWidth: "220px" }}
              >
                {props.live || "Not deployed"}
              </code>
              {props.live && (
                <button
                  onClick={() => copyToClipboard(props.live, "live")}
                  className="btn btn-sm btn-outline-secondary p-1"
                  title="Copy Live URL"
                >
                  {copiedLive ? (
                    <Check size={16} className="text-success" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              )}
            </div>
          </div>

          {/* EDIT BUTTON */}
          <div className="mt-4">
            <Button
              variant="outline-primary"
              className="w-100 d-flex align-items-center justify-content-center gap-2"
              onClick={() => setShowEditModal(true)}
            >
              <Edit3 size={18} />
              Edit Project
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* EDIT MODAL — OPENS ON CLICK */}
      <EditProjectModal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        project={props}
        onSuccess={() => {
          dispatch(fetchProjectsAction(user._id));
        }}
      />
    </>
  );
};

export default ProjectCard;
