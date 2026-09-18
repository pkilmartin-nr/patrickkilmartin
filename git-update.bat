@echo off
echo Starting Git automation sequence...

call git add .

call git commit -m "Latest Updates"

call git pull origin main

call git push origin main

echo Git sequence completed successfully!
pause