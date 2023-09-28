import { FeedbackSection } from "./feedbacksList.styled"
import { FeedbacksList } from "./feedbaksList" 
export const Feedbacks = ({options, onClick}) => {
return(  
<FeedbackSection>
<h2>Please leave feedback</h2>
        <FeedbacksList options={options} onClick={onClick} />
</FeedbackSection>
) 
}