import {NextPage} from "next";
import React from "react";
import {TextField} from "@mui/material";
import Layout from "@/widgets/components/layout";
import WriteTaskCard from "@/shared/ui/writeTaskCard";



interface WritePageProps {
    title?: string;
}

const WritePage: NextPage = ({title}:WritePageProps) => {
    return (
        <WriteTaskCard/>
    );
}

export default WritePage;