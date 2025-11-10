// src/components/AddSkillModal.tsx
"use client";

import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

interface AddSkillModalProps {
  show: boolean;
  onHide: () => void;
  onAdd: (skill: string) => Promise<void>;
}

const AddSkillModal: React.FC<AddSkillModalProps> = ({
  show,
  onHide,
  onAdd,
}) => {
  const [skill, setSkill] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    const trimmed = skill.trim();
    if (!trimmed) {
      setError("Skill name is required");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await onAdd(trimmed);
      setSkill("");
      onHide();
    } catch (err: any) {
      setError(err.message || "Failed to add skill");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSkill("");
    setError("");
    onHide();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add New Skill</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group controlId="add-skill-input">
            <Form.Label>Skill Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. React, Python, Figma"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !loading && handleSubmit()}
              disabled={loading}
              autoFocus
            />
            {error && (
              <small className="text-danger d-block mt-1">{error}</small>
            )}
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose} disabled={loading}>
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={handleSubmit}
          disabled={loading || !skill.trim()}
        >
          {loading ? "Adding..." : "Add Skill"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddSkillModal;
