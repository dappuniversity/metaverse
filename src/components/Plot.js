const Plot = ({ position, size, landId, landInfo, setLandName, setLandOwner, setHasOwner, setLandId }) => {
    const clickHandler = () => {
        setLandName(landInfo.name)
        setLandId(landId)

        if (landInfo.owner === '0x0000000000000000000000000000000000000000') {
            setLandOwner('No Owner')
            setHasOwner(false)
        } else {
            setLandOwner(landInfo.owner)
            setHasOwner(true)
        }
    }

    return (
        <mesh position={position} onClick={clickHandler}>
            <planeBufferGeometry attach="geometry" args={size} />
            <meshStandardMaterial color={"#11E169"} metalness={0.5} roughness={0} />
        </mesh>
    );
}

export default Plot;