"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BiEdit, BiUser } from "react-icons/bi";
import 'animate.css';

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
            <Button className={'my-5 w-full bg-blue-50 text-blue-950 hover:bg-green-100 hover:text-green-900 active:font-bold animate__animated hover:animate-pulse active:animate-ping'}><BiEdit /> Update Profile</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-green-100 text-green-700">
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
                                        <Button slot="close" className={'bg-blue-50 text-blue-950 hover:bg-blue-200 hover:text-blue-900 active:font-bold'}>
                                            Cancel
                                        </Button>
                                        <Button type="submit" slot="close" className={'bg-green-700 text-white hover:bg-green-200 hover:text-green-900 active:font-bold'}>Save</Button>
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