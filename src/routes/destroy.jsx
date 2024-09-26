import { deleteContact } from "../contacts";
import { redirect } from "react-router-dom";


export async function action({ params }) {
    try {
        await deleteContact(params.contactId);
        return redirect("/");
      } catch (error) {
        // You can throw the error here if the deletion fails
        throw new Error("oh dang! Deletion failed.");
      }
  }

