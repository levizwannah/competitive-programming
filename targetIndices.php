<?php  
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function targetIndices($nums, $target) {
        sort($nums);

        $indexes = [];

        $low = 0;
        $high = count($nums) - 1;

        while($low <= $high){
            $mid = floor(($low + $high) / 2);

            $found = $nums[$mid];
            echo $found . "\n";

            if($found == $target){
                $indexes[] = $mid;

                $left = $mid - 1;
                $right = $mid + 1;

                $continue = true;
                while(true){
                    $continue = false;

                    if(isset($nums[$left]) && $nums[$left] == $target){
                        $indexes[] = $left;
                        $left--;
                        $continue = true;
                    }
                    


                    if(isset($nums[$right]) && $nums[$right] == $target){
                        $indexes[] = $right;
                        $right++;
                        $continue = true;
                    }
                   

                    if(!$continue) break;
                }

                sort($indexes);

                return $indexes;
            }
            
            if($found < $target){
                $low = $mid + 1;
            }
            else{
                $high = $mid - 1;
            }
        }

        return $indexes;
    }
}

?>