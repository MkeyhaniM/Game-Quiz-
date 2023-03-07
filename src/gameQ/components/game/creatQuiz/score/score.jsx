import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

var scoreOfUser = 0;
var lastChose = '';

export function CheckTypeOfAnswer({type, score}) {
    if (score == 10) {
        scoreOfUser += 10;
    } else {
        scoreOfUser += 0
    }
    if (type == 'correctAnswer') {
        lastChose = 'correct'
    }
}

export function Score() {
    return (<>
        <div>
            <Button className='text-white mt-5 text-dark fw-semibold' variant="success">
                Score : <Badge bg="success">{scoreOfUser}</Badge>
                <span className="visually-hidden">unread messages</span>
            </Button>
            <p className='bg-white mt-2'>it was - {lastChose == 'correct' ? "correct" : "wrong"} -</p>
        </div>
    </>);
}