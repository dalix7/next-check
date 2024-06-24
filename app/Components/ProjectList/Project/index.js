"use client";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import Link from "next/link";

function Project({ project }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Image width={500} height={500} src={project.img} />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.description}</Card.Text>

        <Link href={`/projects/${project.id}`}>
          <Button variant="primary">Go somewhere</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Project;
