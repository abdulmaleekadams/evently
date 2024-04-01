import EventForm from "@/components/shared/EventForm";
import { auth } from "@clerk/nextjs";
import React from "react";
const UpdateEventPage = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string


  return (
    <div>
      <EventForm userId={userId} type="Update" />
      <p>{userId}</p>
    </div>
  );
};

export default UpdateEventPage;
