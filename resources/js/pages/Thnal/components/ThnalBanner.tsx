import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Button = () => {
    

    const categories = [
        { title: 'portfolio', img: '/assets/book_cambo/cbpa.png', link: '#' },
        { title: 'blog', img: '/assets/thnal/tnal.png', link: '#' },
        { title: 'ecommerce', img: 'icon512_rounded.png', link: '#' },
        { title: 'startup', img: '/assets/thnal/tnal.png', link: '#' },
        { title: 'business', img: '/assets/book_cambo/cbpa.png', link: '#' },
        { title: 'lifestyle', img: 'icon512_rounded.png', link: '#' },
    ];

    return (
        <StyledWrapper>
            <div className="mx-auto mt-10 max-w-screen-2xl px-3 sm:px-10 xl:px-20">
                <h1 className="mb-2 text-xl font-semibold text-[#1B6593] dark:text-[#2eafff]">Resource :</h1>
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {categories.map((category, index) => (
                        <a className="codepen-button shadow-lg shadow-gray-300" key={index} href={category.link}>
                            <div className="flex aspect-square items-center justify-center rounded-xl bg-white">
                                <img src={category.img} alt={category.title} className="mx-auto block w-full object-cover" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .codepen-button {
        display: inline-block;
        position: relative;
        cursor: pointer;
        border-radius: 12px;
        padding: 3px;
        overflow: hidden;
        isolation: isolate;
    }

    /* Default gray border */
    .codepen-button::before {
        content: '';
        position: absolute;
        inset: 0;
        padding: 2px;
        border-radius: 12px;
        background: #1b6593; /* gray-600 */
        z-index: -1;
        transition: background 0.3s ease;
    }

    /* Animate gradient on hover */
    .codepen-button:hover::before {
        background: linear-gradient(115deg, #4fcf70, #fad648, #a767e5, #12bcfe, #44ce7b);
        background-size: 300% 300%;
        animation: ${gradientAnimation} 3s linear infinite;
    }

    /* Make images fit the inner space */
    .codepen-button img {
        display: block;
        width: 100%;
        border-radius: 12px;
    }
`;

export default Button;
