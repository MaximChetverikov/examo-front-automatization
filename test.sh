if [ "$#" -eq 0 ];
then
    echo '{
    "url": "https://dev.examo.quantori.com/"
}'> ./configs/run_env.json
env='dev'
elif [ "$1" == 'main' ];
then
    echo '{
    "url": "https://examo.quantori.com/"
}'> ./configs/run_env.json
env='main'

else 
    echo '{
    "url": "https://'"$1"'.examo.quantori.com/"
}'> ./configs/run_env.json
env=$1
fi


echo '----------------------------'
echo 'Test run on' "$env" 'environment:'
echo '----------------------------'


eval npx cucumber-js