const createFallElement = (delay:number, imgSrc:string, size: number, totalDuration: number) => {
    const fall = document.createElement('fall')
    document.body.appendChild(fall);

    fall.style.position = 'fixed';
    fall.style.top = `-${size}px`;
    fall.style.left =   `${Math.random() * 95}vw`;
    fall.style.transform = `translateY(0)`;
    fall.style.backgroundRepeat = 'no-repeat';
    fall.style.backgroundSize = 'contain';
    fall.style.backgroundImage = `url(${imgSrc})`;
    fall.style.width = `${size}px`;
    fall.style.height = `${size}px`;
    fall.style.opacity = '0';
    fall.style.zIndex = '1000';

    const animation = fall.animate([
        {
            opacity: 1,
            transform: `translateY(0vh) rotateZ(0deg)`,
        },
        {
            transform: `translateY(115vh) rotateZ(270deg)`,
            opacity: 0.75
        },
        {
            opacity: 0,
            transform: `translateY(115vh) rotateZ(360deg)`,
        }
    ],
    {
        duration: totalDuration,
        delay,
    });

    animation.onfinish = () => {
        fall.remove();
    };
}

type Options = {
    imgSrc: string;
    delay?: number;
    size?: number;
    totalDuration?: number;
    createEveryElement?: number;
};

const defaultOptions = {
    delay: 0,
    totalDuration: 10000,
    createEveryElement: 400,
    size: 80,
};

const useWalletRouting = (options: Options) => {
    const { delay, imgSrc, size, totalDuration, createEveryElement } = {
        ...defaultOptions,
        ...options,
    };

    const createBunnies = setInterval(() => {
        createFallElement(delay, imgSrc, size, totalDuration)
    }, createEveryElement);

    setTimeout(() => {
        clearInterval(createBunnies);
    }, totalDuration)
};

export default useWalletRouting;