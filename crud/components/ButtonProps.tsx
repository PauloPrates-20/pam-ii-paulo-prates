import { Button } from 'react-native'

interface ButtonProps {
    text: string;
    color: string;
    onPress: () => void;
}

const ButtonProps: React.FC<ButtonProps> = ({ text, color, onPress }) => {
    return (
        <Button title={text} color={color} onPress={onPress} />
    )
}

export default ButtonProps;