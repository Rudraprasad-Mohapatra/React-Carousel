export default function ImageComponent({ featuredImages, currentIndex }) {
    return (
        <div className="aspect-w-10 aspect-h-9">
            <img src={featuredImages[currentIndex]} alt="1st Image" />
        </div>
    );
}