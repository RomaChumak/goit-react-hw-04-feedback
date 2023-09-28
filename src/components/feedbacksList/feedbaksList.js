import { FeedbackList,  FeedbackItem, FeedbackBtn} from "./feedbacksList.styled"
export const FeedbacksList = ({options, onClick}) => {
return (<FeedbackList>
    {options.map(option => {
        return (
         <FeedbackItem key={option}>
            <FeedbackBtn type="button" option={option} onClick={() => onClick(option)}>
              {option}
            </FeedbackBtn>
          </FeedbackItem>
    )
})}
</FeedbackList>)
}