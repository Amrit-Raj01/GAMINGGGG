#include<stdio.h>
  int main(){
    int i;
    int ans1,ans2,ans3,ans4,ans5;

    printf("welcome To Quiz Game\n\n");
    printf("--> Press 8 for start game\n\n");
    printf("--> Press 0 for exist game\n\n");
    printf("Press any no.:");
    scanf("%d",&i);
    if(i==8){
        printf("The game has started\n\n");
    }
    else if(i==0){
        printf("The game has exist\n");
    }
    else{
        printf("Invalid no.\n");
    }
         if(i==8){
            printf("1.>which of the following code is more easy to learn?\n\n");
            printf("1.>C\n");
            printf("2.>HTML\n");
            printf("3.>Python\n");
            printf("4.>JAVA\n");
            printf("Enter your ans--->\n");
            scanf("%d",&ans1);
            if(ans1==3){
                printf("congratulations, You won 5 points.\n\n");
                
            }
            else{
                printf("wrong ans.\n");
                printf("correct ans is :Python\n\n");
                
            }
            printf("2.>who is the Richest person in the world ?\n\n");
            printf("1.>Gautam Adani\n");
            printf("2.>Elon Musk\n");
            printf("3.>Mark Zuckerberg\n");
            printf("4.>Cristiano Ronaldo\n");
            printf("Enter your ans--->\n");
            scanf("%d",&ans2);
            if(ans2==2){
                printf("congratulations, You won 5 points.\n\n");
                
            }
            else{
                printf("wrong ans\n");
                printf("Correct ans is: Elon Musk\n\n");
                
            }
            printf("3.>which month is coldest in india ?\n\n");
            printf("1.>May\n");
            printf("2.>December\n");
            printf("3.>April\n");
            printf("4.>January\n");
            printf("Enter your ans--->\n");
            scanf("%d",&ans3);
            if(ans3==4){
                printf("congratulations,You won 5 points.\n\n");
        
            }
            else{
                printf("wrong ans.\n");
                printf("Correct ans is: January\n\n");
                
            }
            printf("4.>which of the following related to Kapil Sharma ?\n\n");
            printf("1.>Philospher\n");
            printf("2.>Leader\n");
            printf("3.>Singer\n");
            printf("4.>Comedian\n");
            printf("Enter your ans:--->\n");
            scanf("%d",&ans4);
            if(ans4==4){
                printf("congratulations,You won 5 points.\n\n");
            
            }
            else{
                printf("wrong ans.\n");
                printf("Correct ans is: Comedian\n\n");
            
            }
            printf("5.>which of the following is related to, CODE WITH HARRY ?\n\n");
            printf("1.>Actor\n");
            printf("2.>Coder\n");
            printf("3.>Businessman\n");
            printf("4.>magician\n");
            printf("Enter your ans:--->\n");
            scanf("%d",&ans5);
            if(ans5==2){
                printf("congratulations,You won 5 points.\n\n");
   
            }
            else{
                printf("wrong ans.\n");
                printf("correct ans is: coder\n\n");
                
            }
            printf("You have played very good game\n");
            int i1;
            printf("Enter no. of correct ans.:\n");
            scanf("%d",&i1);
            int final=i1*5;
            printf("your score is:%d\n", final);
            if(final<=15){
                printf("You need more practice\n\n");
                printf("I give you extra ques to practice\n\n");
                printf("What is size of INT data type ?\n");
                printf("Which coding language is extensively used for Game design ?\n");
                printf("What is chemical formula of glucose ?\n");
                printf("Which data type is used for writing decimial value ? ");


            }
            else if(final>25){
                printf("you are doing some fraud\n");
            }
            else{
                printf("You are very good\n");
            }
         }
  

    return 0;
  }