"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BiEdit, BiUser } from "react-icons/bi";

export function UpdateUser() {
    const onSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value.trim();
        const image = e.target.image.value.trim();

        const updatedData = {};

        if (name) {
            updatedData.name = name;
        }
        if (image) {
            updatedData.image = image;
        }
        
        if (Object.keys(updatedData).length === 0) {
            return;
        }

        await authClient.updateUser(
            updatedData
        );
    }
    return (
        <Modal>
            <Button variant="secondary"><BiEdit /> Update Profile</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <BiUser className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Update User</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                                    <TextField className="w-full" name="name" type="text">
                                        <Label>Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>
                                    <TextField className="w-full" name="image" type="text">
                                        <Label>Image URL</Label>
                                        <Input placeholder="Enter your Image URL" />
                                    </TextField>

                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit" slot="close">Save</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}