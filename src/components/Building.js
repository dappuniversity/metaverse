import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';

// Import Assets
import MetalMap from '../assets/MetalMap.png';
import MetalNormalMap from '../assets/MetalNormalMap.png';

const Building = ({ position, size, landId, landInfo, setLandName, setLandOwner, setHasOwner, setLandId }) => {
    const [surface, color] = useLoader(TextureLoader, [MetalNormalMap, MetalMap])

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
            <boxBufferGeometry args={size} />
            <meshStandardMaterial map={color} normalMap={surface} metalness={0.25} />
        </mesh>
    );
}

export default Building;