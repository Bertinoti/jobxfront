/*eslint node/no-missing-import: "error" */
import React from "react";
import PropTypes from "prop-types"
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
import "./style.scss";
import WishCard from "../WishCard/WishCard";

const clamp = (value, clampAt) => {
    if (value > 0) {
        return value > clampAt ? clampAt : value;
    } else {
        return value < -clampAt ? -clampAt : value;
    }
};

const CardCarousel = (data) => {
    const [style, set] = useSpring(() => ({
        transform: "perspective(500px) rotateY(0deg)"
    }));

    const bind = useScroll(event => {
        set({
            transform: `perspective(500px) rotateY(${event.scrolling ? clamp(event.delta[0]) : 0
                }deg)`
        });
    });
    return (
        <div className="container" {...bind()}>
            {data.data.map(wish => (
                <animated.div
                    key={wish.card}
                    className="card"
                    style={{
                        ...style,
                    }}
                >
                    <WishCard
                        title={wish.card}
                        description={wish.description}
                        tagbutton={wish.tag}
                    />
                </animated.div>
            ))}
        </div>
    )
}

CardCarousel.propTypes = {
    data: PropTypes.array.isRequired
}

export default CardCarousel