declare type ParticleOptions = {
    size?: number;
    distance?: number;
};
declare type Options = {
    imgSrc: string;
    selector?: string;
    numberOfParticles?: number;
    debounceDuration?: number;
    disableWhen?: () => boolean;
    particleOptions?: ParticleOptions;
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
declare const useParticleBurst: (options: Options) => {
    initialize: () => void;
    teardown: () => void;
};
export default useParticleBurst;
