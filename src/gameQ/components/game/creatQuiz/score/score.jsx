import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

export var ScoreOfUser = 0;
var lastChose = '';

export function CheckTypeOfAnswer({ type, score }) {
    if (score == 10) {
        ScoreOfUser += 10;
    } else {
        ScoreOfUser += 0
    }
    lastChose = type;
}

export function Score() {
    return (<>
        <div>
            <Button className='text-white mt-5 text-dark fw-semibold' variant="success">
                Score : <Badge bg="success">{ScoreOfUser}</Badge>
                <span className="visually-hidden">unread messages</span>
            </Button>
            <p className='bg-white mt-2'>The answer had been - {lastChose} {!lastChose && "Nothing !"} -</p>
        </div>
    </>);
}