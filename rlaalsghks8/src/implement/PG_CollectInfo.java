package implement;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class PG_CollectInfo {
    public int[] solution(String today, String[] terms, String[] privacies) {
        List<Integer> answerList= new ArrayList<>();


        String[] todayArr = today.split("\\.");
        int tYear = Integer.parseInt(todayArr[0]);
        int tMonth = Integer.parseInt(todayArr[1]);
        int tDay = Integer.parseInt(todayArr[2]);

        HashMap<String,Integer> termsMap = new HashMap<>();

        for(int i=0; i<terms.length; i++){
            String[] termsArr = terms[i].split(" ");
            termsMap.put(termsArr[0],Integer.parseInt(termsArr[1]));
        }

        for(int i=0; i<privacies.length; i++){
            String[] privaciesArr = privacies[i].split(" ");
            String[] privaciesDate = privaciesArr[0].split("\\.");
            int pYear = Integer.parseInt(privaciesDate[0]);
            int pMonth = Integer.parseInt(privaciesDate[1]);
            int pDay = Integer.parseInt(privaciesDate[2]);
            int termMonth = termsMap.get(privaciesArr[1]);
            int eYear = pYear;
            int eMonth = pMonth+termMonth;
            int eDay = pDay-1;

            while(eMonth>12){
                eYear++;
                eMonth-=12;
            }


            if(pDay==0){
                eMonth--;
                eDay=28;
                if(eMonth ==0){
                    eMonth=12;
                    eYear--;
                }
            }


            if(tYear>eYear ||(tYear==eYear && tMonth>eMonth) || (tYear == eYear && tMonth == eMonth && tDay > eDay)){
                answerList.add(i+1);
            }

        }

        int[] answer= new int[answerList.size()];

        for(int i=0; i<answerList.size(); i++){
            answer[i] = answerList.get(i);
        }





        return answer;
    }
}
