import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

interface Props {
    onClick: () => void;
}

const Like = ({ onClick }: Props) => {
    const [liked, setLiked] = useState(false);

    const toggle = () => {
        setLiked(!liked);
        onClick();
    }

    if (liked) return <FaHeart size={30} color="#ff6b81" onClick={toggle} />
    return <CiHeart size={30} color="black" onClick={toggle} />
}

export default Like