echo '----------------------------'
echo 'Test run on' "$1" 'environment:'
echo '----------------------------'


if [ "$#" -eq 0 ];
then
    echo '{
    "url": "https://test.examo.quantori.com/"
}'> ./configs/run_env.json

elif [ "$1" == 'main' ];
then
    echo '{
    "url": "https://examo.quantori.com/"
}'> ./configs/run_env.json

else 
    echo '{
    "url": "https://'"$1"'.examo.quantori.com/"
}'> ./configs/run_env.json
fi

#eval npx cucumber-js