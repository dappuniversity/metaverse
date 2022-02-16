const Plane = () => {
    return (
        <mesh position={[0, 0, 0]}>
            <planeBufferGeometry attach="geometry" args={[50, 50]} />
            <meshStandardMaterial color={"#404040"} />
        </mesh>
    );
}

export default Plane;